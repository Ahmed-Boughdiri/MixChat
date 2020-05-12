import React from 'react';
import Application from "./screens/Application";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Conversation from "./screens/Conversation";
import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown: false
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false
        }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Application" component={Application} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Conversation" component={Conversation} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
