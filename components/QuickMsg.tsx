import React from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";

const QuickMsg: React.FC = () =>{
    return(
        <KeyboardAvoidingView style={styles.container}>
            <TextInput placeholder="Type Your Message ..." style={styles.input} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 20,
    },
    input: {
        width: "100%",
        color: "#fff"
    }
})

export default QuickMsg
