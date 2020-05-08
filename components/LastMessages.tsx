import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Text as Title, Avatar } from "react-native-elements";
import LastMessage from "./LastMessage";
import { notifFreind } from "../global/freindsList";

const WIDTH = Dimensions.get("window").width

const LastMessages: React.FC = () =>{
    return(
        <View style={styles.container}>
            <Title h4>Last Messages</Title>
            <View style={{marginTop: 20}}>
                {
                    notifFreind.map(f =><LastMessage name={f.name} avatar={f.avatar} msg={f.lastAct} key={f.name} />)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        paddingHorizontal: 20,
        marginTop: 40
    },
})

export default LastMessages;
