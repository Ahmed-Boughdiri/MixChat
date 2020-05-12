import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/Input";
import Touchable from "react-native-platform-touchable";
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const SignUp = () =>{
    return(
        <View style={styles.container}>
            <Image source={require("../assets/signin.png")} style={{height: 250,width: 300}} />
            <Input label="UserName" placeholder="Enter Your UserName" icon={<Entypo name="user" size={20} color="#9a9a9a" />} />
            <Input label="Email" placeholder="Enter Your Email" icon={<MaterialIcons name="email" size={24} color="#9a9a9a" />} />
            <Input label="Password" placeholder="Enter Your Password" icon={<FontAwesome5 name="lock" size={20} color="#9a9a9a" />} />
            <Touchable style={styles.btn}>
                <Text style={{color: "#fff",fontSize: 16}}>Sign Up</Text>
            </Touchable>
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

export default SignUp
