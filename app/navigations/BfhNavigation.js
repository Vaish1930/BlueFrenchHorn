import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ShowsScreen from "../screens/ShowsScreen";
import ShowDetailsScreen from "../screens/ShowDetailsScreen";
import Colors from "../constants/Colors";

const BfhNavigation = ({ route }) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        animated
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0.14)"
      />
      <Stack.Navigator
        initialRouteName=""
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
            borderBottomColor: "#888",
            borderWidth: 2,
          },
          headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "light",
          // },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Choose your Favourite Genre" }}
        />
        <Stack.Screen
          name="ShowsScreen"
          component={ShowsScreen}
          options={({ route }) => ({ headerTitle: route.params.title })}
        />
        <Stack.Screen
          name="ShowDetailsScreen"
          component={ShowDetailsScreen}
          options={({ route }) => ({ headerTitle: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BfhNavigation;
