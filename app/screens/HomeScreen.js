import React, { useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Colors from "../constants/Colors";
import CategoriesCard from "../components/CategoriesCard";
import { CATEGORIES } from "../data/dummyData";

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState(CATEGORIES);

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: Colors.secondary }}
      data={categories}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <CategoriesCard
          title={item.title}
          imageUrl={item.imageUrl}
          onCardPress={() => navigation.navigate("ShowsScreen", item)}
        />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
