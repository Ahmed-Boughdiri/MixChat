import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Caption } from "react-native-paper";
import { OtherMsgBox, OwnMsgBox } from "./Msg";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const Conv: React.FC = () => {
  return (
    <View style={styles.container}>
        <OtherMsgBox />
        <OwnMsgBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT * 0.88,
    width: WIDTH,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
});

export default Conv;
