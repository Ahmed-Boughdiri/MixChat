import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Caption } from "react-native-paper";
import Freind from "./Freind";
import { notifFreind, nonNotifFreind } from "../global/freindsList";

const WIDTH = Dimensions.get("window").width

const MessagesList: React.FC<any> = ({ goToConversation }) =>{
    return(
        <View style={styles.container}>
            <ScrollView style={{width: "100%"}} showsVerticalScrollIndicator={false}>
                <Caption style={{fontSize: 15,marginBottom: 10,paddingHorizontal: 20}}>Recent Activities</Caption>
                <View style={{marginBottom: 20}}>
                    {
                        notifFreind.map(f =><Freind avatar={f.avatar} name={f.name} lastAct={f.lastAct} notif={f.notif} key={f.name} goToConversation={goToConversation} />)
                    }
                </View>
                <Caption style={{fontSize: 15,paddingHorizontal: 20}}>Recent Activities</Caption>
                <View style={{marginBottom: 90}}>
                    {
                        nonNotifFreind.map(f =><Freind avatar={f.avatar} name={f.name} lastAct={f.lastAct} notif={f.notif} key={f.name} goToConversation={goToConversation} />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        marginVertical: 20
    },
})

export default MessagesList
