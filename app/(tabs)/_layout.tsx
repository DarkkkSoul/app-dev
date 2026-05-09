import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'

function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "green",
                headerShown: false,

                tabBarStyle: {
                    backgroundColor: "gray",
                    borderTopWidth: 2,
                    borderTopColor: "white",
                    height: 90,
                    paddingTop: 10,
                    paddingBottom: 10,
                },

                tabBarLabelStyle: {
                    fontSize: 18,
                    fontWeight: "600",
                }

            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Todos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='flash-outline' color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='settings' color={color} size={size} />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabLayout