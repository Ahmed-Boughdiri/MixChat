import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Text as Title } from "react-native-elements";
import { loadAsync } from "expo-font";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const HomeHeader: React.FC = () =>{
    const [font,setFont] = React.useState("");
    const loadFont = async() =>{
        await loadAsync({
            "Josefin": require("../assets/Josefin.ttf")
        })
        setFont("Josefin")
    }
    React.useEffect(() =>{
        loadFont()
    },[])
    return(
        <View style={styles.container}>
            <Title h2>MixChat</Title>
            <MaterialCommunityIcons name="account-search-outline" size={30} style={{marginTop: 10}} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: HEIGHT * 0.15,
        width: WIDTH,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between"
    }
})

export default HomeHeader
