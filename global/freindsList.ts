
export interface Freind {
    avatar: any;
    name: string;
    lastAct: string;
    notif: number;
}

export interface Potential {
    name: string;
    avatar: any,
    email: string
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

export const potential: Potential[] = [
    {
        name: "Sergio Marquina",
        avatar: require("../assets/pot1.jpg"),
        email: "sergiomarquina@yahoo.com",
    },
    {
        name: "Liza @liza22",
        avatar: require("../assets/pot2.jpg"),
        email: "liza22@gmail.com"
    },
    {
        name: "Clever Simon",
        avatar: require("../assets/pot3.jpg"),
        email: "Simon15334@gmail.com"
    },
    {
        name: "Khaled",
        avatar: require("../assets/pot4.jpg"),
        email: "kaled_awad@gmail.com"
    },
    {
        name: "Carla",
        avatar: require("../assets/pot5.jpg"),
        email: "karla@gmail.com"
    },
    {
        name: "Joseph",
        avatar: require("../assets/pot6.jpg"),
        email: "joseph_the_best@yahoo.com"
    },
    {
        name: "Miguel",
        avatar: require("../assets/pot7.jpg"),
        email: "miguel@yahoo.com"
    },
    {
        name: "Elena Elovackay",
        avatar: require("../assets/pot8.jpg"),
        email: "Elena_Elovackay@gmail.com"
    },
    {
        name: "Laura Crespi",
        avatar: require("../assets/pot9.jpg"),
        email: "Laura-Crespi@gmail.com"
    },
    {
        name: "Martin Péchy",
        avatar: require("../assets/pot10.jpg"),
        email: "MartinPéchy@gmail.com"
    },
]