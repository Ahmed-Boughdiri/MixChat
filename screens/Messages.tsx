import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MessagesHeader from "../components/MessagesHeader";
import LastMessages from "../components/LastMessages";

const Messages: React.FC = () =>{
    return(
        <View style={styles.container}>
            <MessagesHeader />
            <LastMessages />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

export default Messages;
