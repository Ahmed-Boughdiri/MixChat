
export interface Freind {
    avatar: any;
    name: string;
    lastAct: string;
    notif: number
}

export const freinds: Freind[] = [
    {
        avatar: require("../assets/avatar1.jpg"),
        name: "John Doe",
        lastAct: "Hello Ahmed You're The Best Dude",
        notif: 1
    },
    {
        avatar: require("../assets/avatar2.jpg"),
        name: "Gary Simon",
        lastAct: "I Like Your Last Design",
        notif: 2
    },
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
    {
        avatar: require("../assets/avatar5.jpg"),
        name: "Carolina",
        lastAct: "Hi",
        notif: 1
    },
    {
        avatar: require("../assets/avatar6.jpg"),
        name: "Karim",
        lastAct: "What's up Man",
        notif: 3
    },
    {
        avatar: require("../assets/avatar7.jpg"),
        name: "Yoshi Reus",
        lastAct: "Hello",
        notif: 1
    }
]