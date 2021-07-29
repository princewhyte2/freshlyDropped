/* eslint-disable no-undef */
import React from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "60%",
    width: "100%",
  },
  title: {
    marginTop: 26,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 36,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    paddingLeft: 36,
    paddingRight: 36,
    lineHeight: 27,
  },
  text_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#43C32E",
    borderRadius: 10,
    position: "relative",
    top: 80,
  },
  button_text: {
    color: "white",
    fontWeight: "600",
    paddingVertical: 20,
    textAlign: "center",
    paddingHorizontal: 84,
  },
});

const Onboarding = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/carrot.png")} style={styles.image} />
      <Text style={styles.title}>All your favorites</Text>
      <View style={styles.text_container}>
        <Text style={styles.description}>
          Shop your favorite recipes freshly delivered to your doorstep
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.button_text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
