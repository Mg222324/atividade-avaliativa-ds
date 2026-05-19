import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function Button({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF9800",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});