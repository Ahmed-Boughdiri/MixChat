import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Caption } from "react-native-paper";
import { Avatar } from "react-native-elements";

const OwnMsgBox: React.FC = () => {
    return (
      <View style={{ maxWidth: "85%" }}>
          <Caption style={{textAlign: "center"}}>04:00 AM</Caption>
          <View style={styles.msgContainer}>
              <Text style={styles.msg}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi
                  voluptatem, natus esse repellendus, ipsa unde soluta delectus
                  dignissimos consequatur doloremque accusantium accusamus temporibus,
                  doloribus qui eos voluptatum expedita laboriosam?
              </Text>
          </View>
      </View>
    );
  }
  
  const OtherMsgBox: React.FC = () =>{
      return(
          <View style={{justifyContent: "flex-end",flexDirection: "row", alignItems: "flex-end"}}>
              <View style={{maxWidth: "80%"}}>
                <Caption style={{textAlign: "center"}}>04:00 AM</Caption>
                <View style={styles.otherMsg}>
                    <Text style={{...styles.msg, color: "#fff"}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi
                        voluptatem, natus esse repellendus, ipsa unde soluta delectus
                        dignissimos consequatur doloremque accusantium accusamus temporibus,
                        doloribus qui eos voluptatum expedita laboriosam?
                    </Text>
                </View>
              </View>
              <Avatar rounded source={require("../assets/avatar3.jpg")} size="medium" containerStyle={{marginBottom: 13,marginLeft: 10}} />
          </View>
      )
  }

const styles = StyleSheet.create({
    msgContainer: {
        maxWidth: "100%",
        backgroundColor: "#d3d3d3",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginLeft: 10,
        padding: 17,
        marginBottom: 15
      },
      msg: {
        fontSize: 15
      },
      otherMsg: {
        width: "100%",
        padding: 17,
        backgroundColor: "#2663FF",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        marginBottom: 15,
      }
})

export {
    OwnMsgBox,
    OtherMsgBox
}
