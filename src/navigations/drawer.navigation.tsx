import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AudioVideoScreen, AcelerometroScreen, PedometroScreen, MagnetometroScreen, GiroscopioScreen } from "../screens";
import { MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
    return (
        <Drawer.Navigator
            screenOption={{
                headerShown: true,
                headerStyle: { backgroundColor: colors.primary },
                headerTintColor: colors.white,
                drawerStyle: {
                    backgroundColor: colors.primary,
                },
                drawerInactiveTintColor: colors.white,
                drawerActiveTintColor: colors.white,
            }}
        >
            <Drawer.Screen
                name="AudioVideo"
                component={AudioVideoScreen}
                options={{
                    drawerLabel: "Áudio Vídeo",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="video"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Acelerometro"
                component={AcelerometroScreen}
                options={{
                    drawerLabel: "Acelerômetro",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="car"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Magneto"
                component={MagnetometroScreen}
                options={{
                    drawerLabel: "Magneto",
                    drawerIcon: () => (
                        <FontAwesome
                            name="magnet"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Pedometro"
                component={PedometroScreen}
                options={{
                    drawerLabel: "Pedômetro",
                    drawerIcon: () => (
                        <Foundation
                            name="foot"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Gyroscopio"
                component={GiroscopioScreen}
                options={{
                    drawerLabel: "Gyroscópio",
                    drawerIcon: () => (
                        <FontAwesome
                            name="balance-scale"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
