import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Tooltip } from "react-native-elements";
import { Caption } from "react-native-paper";
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import QuickMsg from "./QuickMsg";

const LastMessage: React.FC<{ name: string, avatar: any, msg: string }> = ({ name, avatar, msg }) =>{
    return(
        <View style={styles.lastMessage}>
            <View style={styles.lastMessageHeader}>
                <Avatar rounded source={avatar} size={50} />
                <View style={{marginLeft: 15}}>
                    <Text style={styles.title}>{name}</Text>
                    <Caption style={{marginTop: -4}}>4 min ago</Caption>
                </View>
            </View>
            <View style={styles.messageContent}>
                <Text style={styles.content}>{msg}</Text>
            </View>
            <View style={styles.action}>
                <Feather name="heart" size={26} color="#616161" />
                <Feather name="thumbs-up" size={26} color="#616161" />
                <Tooltip withOverlay={false} popover={<QuickMsg />} width={270} backgroundColor="#2663FF" height={60}>
                    <MaterialIcons name="message" size={26} color="#616161" /> 
                </Tooltip>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lastMessage: {
        width: "100%",
        padding: 20,
        backgroundColor: "#ececec",
        borderRadius: 10,
        marginBottom: 10
    },
    lastMessageHeader: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        textAlign: "left",
        color: "#000",
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 7
    },
    messageContent: {
        width: "100%",
        paddingVertical: 15,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },
    content: {
        textAlign: "left",
        color: "#000",
        fontSize: 16
    },
    action: {
        width: "100%",
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    }
})

export default LastMessage;