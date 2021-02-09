import React from "react";
import CarouselView from "react-native-snap-carousel";

import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CarouselItem from "../components/CarouselItem";

const { width } = Dimensions.get("window");

const Carousal = ({ carousalImages }) => {
  return (
    <View>
      <CarouselView
        autoplay
        loop
        enableSnap
        data={carousalImages}
        useScrollView
        enableMomentum={false}
        lockScrollWhileSnapping
        sliderWidth={width}
        itemWidth={width}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => <CarouselItem carousalImage={item} />}
      />
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({});
