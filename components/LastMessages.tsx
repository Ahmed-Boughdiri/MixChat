import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Text as Title } from "react-native-elements";

const WIDTH = Dimensions.get("window").width

const LastMessages: React.FC = () =>{
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title h4>Last Messages</Title>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        paddingHorizontal: 20,
        marginTop: 40
    }
})

export default LastMessages;
