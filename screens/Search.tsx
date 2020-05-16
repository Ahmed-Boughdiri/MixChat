import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Text as Title, Avatar } from "react-native-elements";
import PotentialFreind from "../components/PotentialFreind";
import { getSuggestions, Potential } from "../global/freindsList";
import { getFreinds, Freind } from "../global/freindsList";

const WIDTH = Dimensions.get("window").width;

type Poten = (Potential | never)

const Search: React.FC = () => {
  const [potentialFreinds, setPotentialFreind] = React.useState<Poten[]>([])
  const loadPotentialFreinds = async() => {
    const potential = await getSuggestions();
    setPotentialFreind(potential);
  };
  React.useEffect(() => {
    loadPotentialFreinds();
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Title h3>Find New Freinds</Title>
        <View style={{ marginTop: 20, marginBottom: 30 }}>
          {(potentialFreinds) && potentialFreinds.map(p => (
            <PotentialFreind
              userName={p.userName}
              key={p.userName}
              email={p.email}
              avatar={p.avatar}
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
