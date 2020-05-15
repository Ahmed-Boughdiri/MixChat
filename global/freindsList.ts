import axios from "axios";
import { AsyncStorage } from "react-native";

export interface Freind {
    avatar: any;
    name: string;
    lastAct: string;
    notif: number;
}

export interface Potential {
    userName: string;
    avatar: any,
    email: string
}

export let freinds: Freind[] = []

export const notifFreind : Freind[] = [
    {
        avatar: require("../assets/avatar6.jpg"),
        name: "Karim",
        lastAct: "What's up Man",
        notif: 3
    },
    {
        avatar: require("../assets/avatar2.jpg"),
        name: "Gary Simon",
        lastAct: "I Like Your Last Design",
        notif: 2
    },
    {
        avatar: require("../assets/avatar1.jpg"),
        name: "John Doe",
        lastAct: "Hello Ahmed You're The Best Dude",
        notif: 1
    },
    {
        avatar: require("../assets/avatar5.jpg"),
        name: "Carolina",
        lastAct: "Hi",
        notif: 1
    },
    {
        avatar: require("../assets/avatar7.jpg"),
        name: "Yoshi Reus",
        lastAct: "Hello",
        notif: 1
    }
]

export const nonNotifFreind: Freind[] = [
    {
        avatar: require("../assets/avatar3.jpg"),
        name: "Meriam Seoul",
        lastAct: "",
        notif: 0
    },
    {
        avatar: require("../assets/avatar4.jpg"),
        name: "Jack Winbow",
        lastAct: "",
        notif: 0
    },
]

export let potential: Potential[] = []

// get Freinds

const getFreinds = async() =>{
    const uid = await AsyncStorage.getItem("uid");
    const id = (uid === null) ? "" : uid
    if(id !== ""){
        const data = await axios.post("https://us-central1-mixchat-402d6.cloudfunctions.net/getFreinds",{ uid: id });
        const result = data.data
        freinds = result
    }
}

// get Suggestions

export const getSuggestions = async() =>{
    const uid = await AsyncStorage.getItem("uid");
    const id = (uid === null) ? "" : uid
    if(id !== ""){
        const data = await axios.post("https://us-central1-mixchat-402d6.cloudfunctions.net/getSuggestions",{ freinds: freinds, uid: id });
        const result = data.data;
        potential = result
    }
}

// add Freind

export const addFreind = async(freind: any) =>{
    const uid = await AsyncStorage.getItem("uid");
    const id = (uid === null) ? "" : uid
    let result
    if(id !== ""){
        const data = await axios.post("https://us-central1-mixchat-402d6.cloudfunctions.net/addFreind",{ uid: id, freind: freind })
        result = data.data
        console.log(result)
    }
    if(result.success) {
        freinds.push(result.freind)
    }
}

// getFreinds();

// console.log("**************************")
// console.log("**************************")
// console.log("**************************")
// console.log("**************************")
// console.log("**************************")

//getSuggestions()