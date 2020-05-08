import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Text as Title, Avatar } from "react-native-elements";
import PotentialFreind from "../components/PotentialFreind";
import { potential } from "../global/freindsList";

const WIDTH = Dimensions.get("window").width

const Search: React.FC = () =>{
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <Title h3>Find New Freinds</Title>
                <View style={{marginTop: 20,marginBottom: 30}}>
                    {
                        potential.map(p => <PotentialFreind name={p.name} key={p.name} email={p.email} avatar={p.avatar} />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    scroll: {
        width: WIDTH,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingTop: 30
    },
})

export default Search
