import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import MessagesList from "../components/MessagesList";

const Home: React.FC<any> = ({ navigation }) =>{
    const goToConversation = () =>navigation.navigate("Conversation")
    const goToWelcome = () => navigation.navigate("Welcome");
    return(
        <View style={styles.container}>
            <ScrollView style={{flex: 1,marginTop: 20}} showsVerticalScrollIndicator={false}>
                <HomeHeader goToWelcome={goToWelcome} />
                <MessagesList goToConversation={goToConversation} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})

export default Home;
