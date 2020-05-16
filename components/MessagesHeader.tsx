import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Text as Title, Avatar } from "react-native-elements";
import { getFreinds, Freind } from "../global/freindsList";
import Touchable from "react-native-platform-touchable";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const MessagesHeader: React.FC<any> = ({ goToCoversation, goToSearch }) => {
  const [freindsList,setFreindsList] = React.useState<Freind[]>([])
  const loadFreinds = async() =>{
    const freinds = await getFreinds()
    setFreindsList(freinds)
  }
  React.useEffect(() =>{
    loadFreinds()
  },[])
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
          <Touchable onPress={() =>goToSearch()}>
            <Avatar
              rounded
              overlayContainerStyle={{ backgroundColor: "#dfe8ff" }}
              size={65}
              icon={{ name: "add", color: "#2663FF" }}
              containerStyle={{ marginRight: 10 }}
            />
          </Touchable>
          {freindsList.map((f) => (
            <Touchable onPress={() =>goToCoversation()} key={f.name}>
              <Avatar
                rounded
                source={require("../assets/user.png")}
                size={65}
                containerStyle={{ marginRight: 10 }}
              />
            </Touchable>
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
    paddingTop: 30,
  },
});

export default MessagesHeader;
