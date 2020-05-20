import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Caption } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { Potential, addFreind } from "../global/freindsList";

const PotentialFreind: React.FC<any> = ({ userName, avatar, email, updateSug }) => {
  return (
    <View style={styles.potentialFreind}>
      <View style={styles.freindInfo}>
        <Avatar rounded source={require("../assets/male.png")} size={60} />
        <View style={{ marginLeft: 15, justifyContent: "center" }}>
          <Text style={styles.name}>{userName}</Text>
          <Caption>{email}</Caption>
        </View>
      </View>
      <View style={styles.actions}>
        <Avatar
          onPress={() => addFreind({name: userName, email: email},updateSug)}
          rounded
          icon={{ name: "add", color: "#fff" }}
          overlayContainerStyle={{ backgroundColor: "#2663FF" }}
          size={55}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  potentialFreind: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  freindInfo: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    textAlign: "left",
    color: "#000",
    fontSize: 17,
    fontWeight: "bold",
  },
  actions: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PotentialFreind;
