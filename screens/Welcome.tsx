import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Swiper from "react-native-swiper";
import FirstView from "../components/FirstView"
import SecondView from "../components/SecondView"
import ThirdView from "../components/ThirdView"

const Welcome: React.FC<any> = ({ navigation }) =>{
    const getStarted = () =>navigation.navigate("SignIn")
    return(
        <View style={styles.container}>
            <Swiper autoplay autoplayTimeout={4}>
                <FirstView getStarted={getStarted} />
                <SecondView getStarted={getStarted} />
                <ThirdView getStarted={getStarted} />
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Welcome;
