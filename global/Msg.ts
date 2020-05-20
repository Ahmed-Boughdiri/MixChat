import { getFreinds, Freind, freinds } from "./freindsList";

interface Msg {
    avatar: any,
    msgContent: string;
    owner: "receiver" | "sender",
    time: string
}

export const act: Freind[] = []

export const fr: Freind[] = []

let executed = false

export const filter = async() =>{
    if(!executed){
        executed = true
        const freindsList = await getFreinds()
        freindsList.map(f =>{
            if(f.conversation.length >1){
                act.push(f)
            }else{
                fr.push(f)
            }
        })
        console.log("notif",act)
        console.log("non",fr)
    }
    const result = {
        act: act,
        fr: fr
    }
    return result
}

export let conversation = {}

export const passData = (data:any) =>{
    conversation = data;
}
