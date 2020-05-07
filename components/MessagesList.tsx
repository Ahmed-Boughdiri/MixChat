import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Caption } from "react-native-paper";
import Freind from "./Freind";
import { freinds } from "../global/freindsList";

const WIDTH = Dimensions.get("window").width

const MessagesList: React.FC = () =>{
    return(
        <View style={styles.container}>
            <ScrollView style={{width: "100%"}} showsVerticalScrollIndicator={false}>
                <Caption style={{fontSize: 15,marginBottom: 10}}>Recent Activities</Caption>
                <View style={{marginBottom: 90}}>
                    {
                        freinds.map(f =><Freind avatar={f.avatar} name={f.name} lastAct={f.lastAct} notif={f.notif} key={f.name} />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        paddingHorizontal: 20,
        marginVertical: 20
    },
})

export default MessagesList
