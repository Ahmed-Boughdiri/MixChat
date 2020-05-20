import axios from "axios";
import { AsyncStorage } from "react-native";

interface Conversation {
    content: string;
    time: string;
    owner: string;
}

export interface Freind {
    name: string;
    uid: string;
    email: string;
    conversation: Conversation[]
}

export interface Potential {
    userName: string;
    avatar: any,
    email: string
}

export const notifFreind: Freind[] = []

export const nonNotifFreind: Freind[] = []

// get UID

const getUID = async () => {
    const uid = await AsyncStorage.getItem("uid");
    const id = (uid === null) ? "" : uid;
    return id;
}


// get Freinds

export let freinds: Freind[] = []

export const getFreinds = async () => {
    const uid: string = await getUID()
    const freindsList: Freind[] = await (await axios.post("https://us-central1-mixchat-402d6.cloudfunctions.net/getFreinds", { uid: uid })).data
    freinds = freindsList
    return freindsList
}

// get Suggestions

export let sug: Potential[] = []

export const getSuggestions = async() =>{
    let freindsList: Freind[] = []
    if(freinds.length > 1){
        freindsList = freinds
    } else {
        freindsList = await getFreinds()
    }
    const suggList: Potential[] = await (await axios.post("https://us-central1-mixchat-402d6.cloudfunctions.net/getSuggestions",{ freinds: freindsList })).data
    sug = suggList
    return sug
}

// add Freind

const find = (cred: any): number =>{
    const email = cred.email
    let result = -1
    for(var i in sug){
        if(sug[+i].email === email){
            result = +i
            break
        }
    }
    return result
}

interface FreindCred {
    name: string;
    email: string
}

export const addFreind = async(freindCred: FreindCred, updateSug: any) =>{
    let freindsList: Freind[] = []
    if(freinds !== []){
        freindsList = freinds
    }else {
        freindsList = await getFreinds()
    }
    const uid = await getUID()
    const cred = await (await axios.post("https://us-central1-mixchat-402d6.cloudfunctions.net/addFreind",{ uid: uid, freind: freindCred, freinds: freindsList })).data
    const index = find(cred)
    sug.splice(index, 1)
    freinds.push(cred)
    updateSug()
}
