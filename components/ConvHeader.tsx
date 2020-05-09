import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Avatar } from "react-native-elements";
import { Caption } from "react-native-paper";
import Touchable from "react-native-platform-touchable";
import { Ionicons } from '@expo/vector-icons'; 

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window")

const ConvHeader: React.FC<any> = ({ goBack }) =>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Touchable onPress={() => goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" style={{marginRight: 10}} />
                </Touchable>
                <Avatar rounded source={require("../assets/avatar3.jpg")} size={55} />
                <View style={{height: 45,marginLeft: 10}}>
                    <Text style={styles.name}>Meraim Seoul</Text>
                    <Caption style={{marginTop: -5}}>Seoul@yahoo.com</Caption>
                </View>
            </View>
            <Touchable style={styles.info}>
                <Ionicons name="ios-information-circle-outline" size={35} color="black" />
            </Touchable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: HEIGHT * 0.15,
        width: WIDTH,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    name: {
        textAlign: "left",
        color: "#000",
        fontSize: 17,
        fontWeight: "bold"
    },
    info: {
        marginBottom: 11
    }
})

export default ConvHeader
