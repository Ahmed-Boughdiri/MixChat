import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import ConvMsg from "../components/ConvMsg";
import Conv from "../components/Conv";
import ConvHeader from "../components/ConvHeader";

const Conversation: React.FC<any> = ({ navigation }) =>{
    const goBack = () => navigation.goBack()
    return(
        <KeyboardAvoidingView style={styles.container}>
            <ConvHeader goBack={goBack} />
            <Conv />
            <ConvMsg />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

export default Conversation
