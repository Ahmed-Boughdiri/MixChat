import React from "react";
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import MessagesHeader from "../components/MessagesHeader";
import LastMessages from "../components/LastMessages";

const Messages: React.FC<any> = ({ navigation }) =>{
    const goToCoversation = () =>navigation.navigate("Conversation")
    const goToSearch = () =>navigation.navigate("Search")
    return(
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 20}}>
                <MessagesHeader goToCoversation={goToCoversation} goToSearch={goToSearch} />
                <LastMessages />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

export default Messages;
