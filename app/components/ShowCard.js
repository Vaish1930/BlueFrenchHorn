import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ShowCard = ({ title, imageUrl, onShowPress, about_Show }) => {
  return (
    <View style={styles.showCard}>
      <TouchableOpacity style={{ flex: 1 }} onPress={onShowPress}>
        <View style={styles.showImage}>
          <ImageBackground
            source={{ uri: imageUrl }}
            style={styles.showImage}
            resizeMode="cover"
          >
            <View style={styles.showtextContainer}>
              <Text style={styles.showtitle}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <View style={styles.aboutShow}>
        <Text style={styles.aboutShowText}>{about_Show}</Text>
      </View>
    </View>
  );
};

export default ShowCard;

const styles = StyleSheet.create({
  showCard: {
    flex: 1,

    height: 300,
    margin: 15,

    overflow: "hidden",
  },

  showImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  showtextContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    alignItems: "center",
  },
  showtitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  aboutShowText: {
    color: "white",
    fontStyle: "italic",
  },
});
