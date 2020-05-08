import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const Settings: React.FC = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.setting}>
                <Entypo name="log-out" size={24} color="#444" />
                <Text style={styles.settingName}>Log Out</Text>
            </View>
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
