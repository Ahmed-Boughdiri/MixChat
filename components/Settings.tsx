import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { signOut } from "../global/Sign";
import Touchable from "react-native-platform-touchable";

const Settings: React.FC<any> = ({ goToWelcome }) =>{
    const goSignOut = async() =>{
        await signOut();
        goToWelcome()
    }
    return(
        <View style={styles.container}>
            <Touchable style={styles.setting} onPress={goSignOut}>
                <View style={{flexDirection: "row"}}>
                    <Entypo name="log-out" size={24} color="#444" />
                    <Text style={styles.settingName}>Log Out</Text>
                </View>
            </Touchable>
            <View style={styles.setting}>
                <AntDesign name="edit" size={24} color="#444" />
                <Text style={styles.settingName}>Edit Info</Text>
            </View>
            <View style={styles.setting}>
                <Ionicons name="ios-notifications" size={24} color="#444" />
                <Text style={styles.settingName}>Notifications</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    setting: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    settingName: {
        textAlign: "left",
        color: "#444",
        marginLeft: 15,
        fontSize: 17,
        fontWeight: "bold"
    }
})

export default Settings;
