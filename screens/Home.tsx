import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../components/HomeHeader";
import MessagesList from "../components/MessagesList";

const Home: React.FC<any> = ({ navigation }) =>{
    const goToConversation = () =>navigation.navigate("Conversation")
    return(
        <View style={styles.container}>
            <HomeHeader />
            <MessagesList goToConversation={goToConversation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

export default Home;
