import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import Input from "../components/Input";
import Touchable from "react-native-platform-touchable";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { signUp, ResultProps } from "../global/Sign";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

const SignUp: React.FC<any> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image
          source={require("../assets/signin.png")}
          style={{ height: 250, width: 300 }}
        />
        <Formik
            initialValues={{
                userName: "",
                email: "",
                password: ""
            }}
            onSubmit={async(val,action) =>{
                const result: ResultProps =  await signUp(val.userName, val.email, val.password);
                if(result.success){
                    navigation.navigate("Application")
                }else{
                    Alert.alert("Error",result.error)
                }
                action.resetForm()
            }}
            validationSchema={schema}
        >
            {
                (formikProps) =>(
                    <View>
                        <Input
                            label="UserName"
                            placeholder="Enter Your UserName"
                            icon={<Entypo name="user" size={20} color="#9a9a9a" />}
                            changeValue={formikProps.handleChange("userName")}
                            secure={false}
                            value={formikProps.values.userName}
                        />
                        <Input
                            label="Email"
                            placeholder="Enter Your Email"
                            icon={<MaterialIcons name="email" size={24} color="#9a9a9a" />}
                            changeValue={formikProps.handleChange("email")}
                            secure={false}
                            value={formikProps.values.email}
                        />
                        <Input
                            label="Password"
                            placeholder="Enter Your Password"
                            icon={<FontAwesome5 name="lock" size={20} color="#9a9a9a" />}
                            changeValue={formikProps.handleChange("password")}
                            secure={true}
                            value={formikProps.values.password}
                        />
                        <Touchable style={styles.btn} onPress={() =>formikProps.handleSubmit}>
                            <Text style={{ color: "#fff", fontSize: 16 }}>Sign Up</Text>
                        </Touchable>
                        <Text style={{color: "red",textAlign: "center"}}>
                            {
                                (formikProps.errors.email && formikProps.touched) ? formikProps.errors.email : ""
                            }
                        </Text>
                        <Text style={{color: "red",textAlign: "center"}}>
                            {
                                (formikProps.errors.userName && formikProps.touched) ? formikProps.errors.userName : ""
                            }
                        </Text>
                        <Text style={{color: "red",textAlign: "center"}}>
                            {
                                (formikProps.errors.password && formikProps.touched) ? formikProps.errors.password : ""
                            }
                        </Text>
                    </View>
                )
            }
        </Formik>
      </View>
    </KeyboardAvoidingView>
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
    height: 50,
    width: 300,
    backgroundColor: "#2663FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15,
  },
});

export default SignUp;
