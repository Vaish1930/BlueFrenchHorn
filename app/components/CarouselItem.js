import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ carousalImage }) => {
  return (
    <View style={styles.CardView}>
      <Image style={styles.image} source={{ uri: carousalImage }} />
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  CardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: -0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
});
