import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Touchable from "react-native-platform-touchable";
import Input from "../components/Input";
import { signIn, ResultProps } from "../global/Sign";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

const SignIn: React.FC<any> = ({ navigation }) => {
  const signUp = () => navigation.navigate("SignUp");
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/signup.png")}
        style={{ height: 250, width: 300 }}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async(val) => {
            const result: ResultProps = await signIn(val.email, val.password);
            if (result.success) {
                navigation.navigate("Application");
            } else {
                Alert.alert("Error", result.error);
            }
        }}
        validationSchema={schema}
      >
        {(formikProps) => (
          <View>
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
            <Touchable style={styles.btn} onPress={() =>formikProps.handleSubmit()}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Sign Up</Text>
            </Touchable>
            <Text style={{color: "red",textAlign: "center"}}>
                {
                    (formikProps.errors.email && formikProps.touched) ? formikProps.errors.email : ""
                }
            </Text>
            <Text style={{color: "red",textAlign: "center"}}>
                {
                    (formikProps.errors.password && formikProps.touched) ? formikProps.errors.password : ""
                }
            </Text>
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={{ marginTop: 10, marginBottom: 10 }}
        onPress={signUp}
      >
        <Text style={{ color: "#444" }}>I don't have an Account</Text>
      </TouchableOpacity>
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

export default SignIn;
