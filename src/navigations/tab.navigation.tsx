import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AudioVideoScreen, AcelerometroScreen } from "../screens";
import { MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: colors.yellow,
                tabBarActiveTintColor: colors.white,
                tabBarInactiveBackgroundColor: colors.yellowLight,
                tabBarInactiveTintColor: colors.white,
            }}
        >
            <Tab.Screen
                name="AudioVideo"
                component={AudioVideoScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="video" size={24} color={colors.white} />
                    ),
                }}
            />
            <Tab.Screen
                name="Acelerometro"
                component={AcelerometroScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="car" size={24} color={colors.white} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}
