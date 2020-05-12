import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";


const Input: React.FC<{ label: string, placeholder: string, icon: any }> = ({ label, placeholder, icon }) =>{
    return(
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 17,paddingLeft: 5,color: "#444",paddingBottom: 5}}>{label}: </Text>
            <View style={styles.inputContainer}>
                {icon}
                <TextInput placeholder={placeholder} style={{marginLeft: 15}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        borderColor: "#9a9a9a",
        borderWidth: 1,
        borderRadius: 5
    }
})

export default Input
