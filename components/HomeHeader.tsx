import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Text as Title, Tooltip } from "react-native-elements";
import { loadAsync } from "expo-font";
import { AntDesign } from '@expo/vector-icons'; 
import Settings from "../components/Settings";

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
            <Tooltip backgroundColor="#fff" popover={<Settings />} overlayColor="rgba(0,0,0,0.5)" width={200} height={180}>
                <AntDesign name="setting" size={30} color="black" style={{marginTop: 10}} />
            </Tooltip>
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
