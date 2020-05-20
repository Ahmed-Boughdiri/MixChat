import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { Caption } from "react-native-paper";
import { Freind as FreindProps } from "../global/freindsList";
import { trait } from "../global/trait";
import Touchable from "react-native-platform-touchable";
import { passData } from "../global/Msg";

const Freind: React.FC<FreindProps | any> = ({ name, lastAct, notif, goToConversation }) => {
  const navigate = () =>{
    passData({
      name: name,
      lastAct: lastAct,
      notif: notif,
    })
    goToConversation()
  }
  return (
    <Touchable onPress={navigate} style={styles.messageContainer}>
      <View style={{flexDirection: "row",paddingHorizontal: 20}}>
        <Avatar rounded source={require("../assets/male.png")} size={60} />
        <View style={{...styles.ownerInfo,width: (notif > 0) ? 210 : 240}}>
          <Text style={styles.name}>{name}</Text>
          <Caption>{lastAct === "" ? "Nothing New" : trait(lastAct)}</Caption>
        </View>
        <View style={{ height: "70%", justifyContent: "center" }}>
          {notif > 0 && (
            <Avatar
              size={30}
              title={notif + ""}
              rounded
              overlayContainerStyle={{ backgroundColor: "#2663FF" }}
            />
          )}
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  ownerInfo: {
    height: "70%",
    justifyContent: "center",
    marginLeft: 10,
  },
  name: {
    textAlign: "left",
    color: "#000",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Freind;
