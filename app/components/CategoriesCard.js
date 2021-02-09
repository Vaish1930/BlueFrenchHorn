import React from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const CategoriesCard = ({ title, imageUrl, onCardPress }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.card}>
      <TouchableComponent
        useForeground
        style={{ flex: 1 }}
        onPress={onCardPress}
      >
        <View style={styles.image}>
          <ImageBackground
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          >
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 300,
    margin: 15,
    borderRadius: 20,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
