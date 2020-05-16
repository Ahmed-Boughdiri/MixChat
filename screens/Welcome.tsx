import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Swiper from "react-native-swiper";
import FirstView from "../components/FirstView";
import SecondView from "../components/SecondView";
import ThirdView from "../components/ThirdView";
import Loading from "../components/Loading";
import { getData, DataProps } from "../global/Sign";

const Welcome: React.FC<any> = ({ navigation }) => {
  const getStarted = () => navigation.navigate("SignIn");
  const [loading, setLoading] = React.useState(true);
  const redirect = async () => {
    const result: DataProps = await getData();
    if (result.findUID) {
      navigation.navigate("Application");
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    redirect();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <Swiper autoplay autoplayTimeout={4}>
          <FirstView getStarted={getStarted} />
          <SecondView getStarted={getStarted} />
          <ThirdView getStarted={getStarted} />
        </Swiper>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
