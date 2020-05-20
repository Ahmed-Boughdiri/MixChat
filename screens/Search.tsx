import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Text as Title, Avatar } from "react-native-elements";
import PotentialFreind from "../components/PotentialFreind";
import { getSuggestions, Potential, sug } from "../global/freindsList";

const WIDTH = Dimensions.get("window").width;

const Search: React.FC = () => {
  const [sugList,setSugList] = React.useState<Potential[]>([])
  const loadSug = async() =>{
    const data = await getSuggestions()
    setSugList(data)
  }
  React.useEffect(() =>{
    loadSug()
  },[])
  const updateSug = () =>{
    setSugList([...sug])
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Title h3>Find New Freinds</Title>
        <View style={{ marginTop: 20, marginBottom: 30 }}>
          {(sugList) && sugList.map(p => (
            <PotentialFreind
              userName={p.userName}
              key={p.email}
              email={p.email}
              avatar={require("../assets/male.png")}
              updateSug={updateSug}
            />
          ))}
        </View>
      </ScrollView>
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
  scroll: {
    width: WIDTH,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});

export default Search;
