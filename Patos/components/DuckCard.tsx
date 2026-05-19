import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

type Props = {
  name: string;
  description: string;
  image: string;
};

export default function DuckCard({
  name,
  description,
  image,
}: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 180,
    backgroundColor: "#f5f5f5",
  },

  info: {
    padding: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5D4037",
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    color: "#6d4c41",
    lineHeight: 22,
  },
});
