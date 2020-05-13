import * as firebase from "firebase";
import axios from "axios";
import { AsyncStorage, Alert } from "react-native";

try {
    firebase.initializeApp({
        apiKey: "AIzaSyCd0ssAahje2SRJiV8nL3trHhQeIlIZPUQ",
        authDomain: "mixchat-402d6.firebaseapp.com",
        databaseURL: "https://mixchat-402d6.firebaseio.com",
        projectId: "mixchat-402d6",
        storageBucket: "mixchat-402d6.appspot.com",
        messagingSenderId: "495622387017",
        appId: "1:495622387017:web:a8c67ef958f1283c155698",
        measurementId: "G-7426HJ9D85"
    })
} catch (error) {
    console.log(error)
}

export interface ResultProps {
    success: boolean,
    error: any
}

export const signUp = async (userName: string, email: string, password: string) => {
    const result: ResultProps = {
        success: true,
        error: ""
    }
    await firebase.auth().createUserWithEmailAndPassword(email, password).then(async(user) => {
        const record = {
            userName: userName,
            email: user.user?.email,
            uid: user.user?.uid,
        }
        await axios.post("https://us-central1-mixchat-402d6.cloudfunctions.net/createUserRecord", { data: record })
        await AsyncStorage.setItem("uid", user.user?.uid!);
        result.success = true;
        result.error = ""
    }).catch(e =>{
        result.success = false;
        result.error = e + ""
    })
    return result
}

export const signIn = async(email: string,password: string) =>{
    const result: ResultProps = {
        success: false,
        error: ""
    }
    await firebase.auth().signInWithEmailAndPassword(email,password).then(async(user) =>{
        await AsyncStorage.setItem("uid",user.user?.uid!);
        result.success = true;
        result.error = "";
    }).catch(e =>{
        result.success = false;
        result.error = e + ""
    })
    return result
}

const getData = async() =>{
    const data = await AsyncStorage.getItem("uid");
    console.log("uid: ",data)
}

//getData();
