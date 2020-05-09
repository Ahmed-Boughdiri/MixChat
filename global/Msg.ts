
interface Msg {
    avatar: any,
    msgContent: string;
    owner: "receiver" | "sender",
    time: string
}