import React from "react";
import Plans from "../pages/Plans/Plans";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import WalletScreen from "./screen/WalletScreen";
import PlansScreen from "./screen/PlansScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Wallet"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            const { name } = route;

            if (name === "Wallet") {
              iconName = focused ? 'card' : 'card-outline';
            } else if (name === "Plans") {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            }
            else if (name === "Operation") {
              iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline';
            }
            else if (name === "Review") {
              iconName = focused ? 'pie-chart' : 'pie-chart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            borderTopColor: '#D7D2FC',
            borderStyle: 'solid',
            borderWidth: 1,
            backgroundColor: '#212529',
            paddingTop: 16,
            height: 100,
          },
        })}
        tabBarOptions={{

          activeTintColor: '#8379E3',
          inactiveTintColor: 'white',
        }}
      >
        <Tab.Screen
          name="Wallet"
          options={{
            headerShown: false
          }}
        >
          {() => <WalletScreen />}
        </Tab.Screen>

        <Tab.Screen
          name="Operation"
          options={{
            headerShown: false
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Operation"
                component={Plans}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Plans"
          options={{
            headerShown: false
          }}
        >
          {() => <PlansScreen />}
        </Tab.Screen>

        <Tab.Screen
          name="Review"
          options={{
            headerShown: false
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Review"
                component={Plans}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
