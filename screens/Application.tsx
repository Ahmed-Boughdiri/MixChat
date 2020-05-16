import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home";
import Messages from "./Messages";
import Search from "./Search";
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();

const Application = () =>{
    return(
        <Tab.Navigator activeColor="#2663FF" barStyle={{ backgroundColor: "#fff" }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused, color }) =><AntDesign name="home" size={26} color={color} style={{marginTop: 7}} />
            }} />
            <Tab.Screen name="Messages" component={Messages} options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused, color }) =><Feather name="message-square" size={26} color={color} style={{marginTop: 7}} />
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarLabel: "",
                tabBarIcon: ({ focused, color }) =><MaterialCommunityIcons name="account-search-outline" size={27} style={{marginTop: 7}} color={color} />
            }} />
        </Tab.Navigator>
    )
}

export default Application;

