import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home";
import Messages from "./Messages";
import Settings from "./Settings";
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();

const Application = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator activeColor="#2663FF" barStyle={{ backgroundColor: "#fff" }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused, color }) =><AntDesign name="home" size={26} color={color} style={{marginTop: 7}} />
                }} />
                <Tab.Screen name="Messages" component={Messages} options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused, color }) =><Feather name="message-square" size={26} color={color} style={{marginTop: 7}} />
                }} />
                <Tab.Screen name="Settings" component={Settings} options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused, color }) =><AntDesign name="setting" size={26} color={color} style={{marginTop: 7}} />
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Application;

