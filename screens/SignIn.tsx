import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import Touchable from "react-native-platform-touchable";
import Input from "../components/Input";

const SignIn: React.FC<any> = ({ navigation }) =>{
    const signUp = () =>navigation.navigate("SignUp")
    return(
        <View style={styles.container}>
            <Image source={require("../assets/signup.png")} style={{height: 250,width: 300}} />
            <Input label="Email" placeholder="Enter Your Email" icon={<MaterialIcons name="email" size={24} color="#9a9a9a" />} />
            <Input label="Password" placeholder="Enter Your Password" icon={<FontAwesome5 name="lock" size={20} color="#9a9a9a" />} />
            <Touchable style={styles.btn} onPress={() =>navigation.navigate("Application")}>
                <Text style={{color: "#fff",fontSize: 16}}>Sign Up</Text>
            </Touchable>
            <TouchableOpacity style={{marginTop: 10,marginBottom: 10}} onPress={signUp}>
                <Text style={{color: "#444"}}>I don't have an Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    btn: {
        height: 50,
        width: 300,
        backgroundColor: "#2663FF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 15
    }
})

export default SignIn
