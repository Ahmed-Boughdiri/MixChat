import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView } from "react-native";
import Touchable from "react-native-platform-touchable";
import { FontAwesome } from '@expo/vector-icons'; 

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window")

const ConvMsg: React.FC = () =>{
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholderTextColor="#9a9a9a" placeholder="Enter Your Msg ..." multiline />
                <Touchable style={styles.btn}>
                    <FontAwesome name="send" size={24} color="#2663FF" />
                </Touchable>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: HEIGHT * 0.12,
        width: WIDTH,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    inputContainer: {
        height: 55,
        width: "100%",
        backgroundColor: "#ddd",
        borderRadius: 60,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        height: 40,
        width: "80%",
        paddingLeft: 30
    },
    btn: {
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 2,
        right: 2
    }
})

export default ConvMsg
