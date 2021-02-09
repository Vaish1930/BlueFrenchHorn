import React from "react";
import { FlatList } from "react-native";

import { SHOWS } from "../data/dummyData";
import ShowCard from "../components/ShowCard";
import Colors from "../constants/Colors";

const ShowsScreen = ({ navigation, route }) => {
  const shows = SHOWS.filter((show) =>
    show.categoryIds.some((categoryId) => categoryId === route.params.id)
  );

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: Colors.secondary }}
      data={shows}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => (
        <ShowCard
          title={item.title}
          imageUrl={item.imageUrl}
          about_Show={item.about_Show}
          onShowPress={() => navigation.navigate("ShowDetailsScreen", item)}
        />
      )}
    />
  );
};

export default ShowsScreen;
