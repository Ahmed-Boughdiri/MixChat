import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions,
} from "react-native";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2663FF" />
      <Text
        style={{
          textAlign: "center",
          color: "#2663FF",
          fontSize: 22,
          marginTop: 15,
        }}
      >
        Loading ...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: WIDTH,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Loading;
