import React from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import Touchable from "react-native-platform-touchable";
import { FontAwesome } from '@expo/vector-icons'; 

const QuickMsg: React.FC = () =>{
    return(
        <KeyboardAvoidingView style={styles.container}>
            <TextInput placeholder="Type Your Message ..." style={styles.input} />
            <Touchable style={styles.send}>
                <FontAwesome name="send" size={20} color="#2663FF" />
            </Touchable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 20,
        flexDirection: "row"
    },
    input: {
        width: "80%",
        color: "#fff"
    },
    send: {
        height: 38,
        width: 38,
        backgroundColor: "#fff",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default QuickMsg
