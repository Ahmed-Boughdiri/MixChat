import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Text as Title, Avatar } from "react-native-elements";
import { freinds } from "../global/freindsList";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const MessagesHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Title h4 style={{ marginLeft: 20, marginBottom: 10 }}>
        Freinds
      </Title>
      <ScrollView
        horizontal
        style={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", marginRight: 20 }}>
          <Avatar
            rounded
            overlayContainerStyle={{ backgroundColor: "#dfe8ff" }}
            size={65}
            icon={{ name: "add", color: "#2663FF" }}
            containerStyle={{ marginRight: 10 }}
          />
          {freinds.map((f) => (
            <Avatar
              key={f.name}
              rounded
              source={f.avatar}
              size={65}
              containerStyle={{ marginRight: 10 }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    justifyContent: "center",
    paddingTop: 50,
  },
});

export default MessagesHeader;
