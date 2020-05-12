import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Text as Title } from "react-native-elements";
import { Caption } from "react-native-paper";
import Touchable from "react-native-platform-touchable";

const SecondView: React.FC<any> = ({ getStarted }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../assets/view2.png")}
          style={{ height: 250, width: 300 }}
        />
        <Title h4 style={{ width: 300, textAlign: "center", marginTop: 20 }}>
          Stay Always in Touch
        </Title>
        <View style={{ width: 300, marginTop: 10 }}>
          <Caption style={{ textAlign: "center", fontSize: 15 }}>
            MixChat is Always The Place Where You can Stay Connected with All
            Your Relatives and Freinds ...
          </Caption>
        </View>
        <Touchable style={styles.btn} onPress={getStarted}>
          <Text style={{ color: "#fff", fontSize: 17 }}>Get Started</Text>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  btn: {
    height: 55,
    width: 300,
    backgroundColor: "#2663FF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default SecondView;
