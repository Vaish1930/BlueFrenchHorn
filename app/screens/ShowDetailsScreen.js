import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Carousal from "../components/Carousal";
import Colors from "../constants/Colors";
import { SHOWS } from "../data/dummyData";

const ShowDetailsScreen = ({ navigation, route }) => {
  const carousalImages = SHOWS.find(
    (carousalImage) => carousalImage.id === route.params.id
  );

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: Colors.primary }}>
        <View style={styles.showTitleContainer}>
          <Image
            style={{ width: "100%", height: 200 }}
            resizeMode="cover"
            source={{ uri: carousalImages.imageUrl }}
          />
          <Text style={styles.titleText}>{carousalImages.title}</Text>
        </View>
        <View style={styles.showContent}>
          <Text style={styles.showHeadings}>About</Text>
          <Text style={styles.aboutText}>{carousalImages.about_Show}</Text>
          <Text style={[styles.showHeadings, styles.castHeading]}>Cast</Text>
          <Text style={{ color: "white" }}>{carousalImages.mainCharacter}</Text>
        </View>

        <Text style={styles.showHeadings}>Screenshots</Text>

        <Carousal carousalImages={carousalImages.carousalImage} />
        <View style={styles.showContent}>
          <Text style={styles.showHeadings}> Storyline</Text>
          <Text style={styles.aboutText}>{carousalImages.Storyline}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShowDetailsScreen;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    padding: 5,

    alignSelf: "center",
  },

  aboutText: {
    color: "#fff",
  },
  showContent: {
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 15,
  },
  showHeadings: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 10,
  },
  castHeading: {
    marginTop: 20,
  },
});
