import React from 'react';
import Application from "./screens/Application";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Conversation from "./screens/Conversation";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
