import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Caption } from "react-native-paper";
import Freind from "./Freind";
import { Freind as FreindsProps } from "../global/freindsList";
import { filter, act, fr } from "../global/Msg";

const WIDTH = Dimensions.get("window").width;

const MessagesList: React.FC<any> = ({ goToConversation }) => {
  const [notifFreinnds, setNotifFreinds] = React.useState<FreindsProps[]>([]);
  const [nonNotifFreinds, setNonNotifFreinds] = React.useState<FreindsProps[]>([]);
  const loadData = async () => {
    const result = await filter();
    setNotifFreinds(act);
    setNonNotifFreinds(fr);
  };
  React.useEffect(() => {
    loadData();
  },[]);
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
          {
              (notifFreinnds.length >1) && (
                  <View>
                    <Caption
                        style={{ fontSize: 15, marginBottom: 10, paddingHorizontal: 20 }}
                        >
                        Recent Activities
                    </Caption>
                    <View style={{ marginBottom: 20 }}>
                        {notifFreinnds.map((f) => (
                            <Freind
                                name={f.name}
                                lastAct={f.conversation[0].content}
                                notif={f.conversation.length}
                                key={f.name}
                                goToConversation={goToConversation()}
                            />
                        ))}
                    </View>
                  </View>
              )
          }
        {
            (nonNotifFreinds.length >1) && (
                <View>
                    <Caption style={{ fontSize: 15, paddingHorizontal: 20 }}>
                        Recent Activities
                    </Caption>
                    <View>
                        { nonNotifFreinds.map((f) => (
                        <Freind
                            name={f.name}
                            lastAct={""}
                            notif={0}
                            key={f.name}
                            goToConversation={goToConversation(f)}
                        />
                        ))}
                    </View>
                </View>
            )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    marginVertical: 20,
  },
});

export default MessagesList;
