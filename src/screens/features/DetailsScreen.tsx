import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { FeedStackParamList } from "../../navigation/types";

type DetailsRouteProp = RouteProp<
  FeedStackParamList,
  'Details'
>;

type Props = {
  route: DetailsRouteProp;
};

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { id, name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Destination ID: {id}</Text>
      <Text style={styles.description}>
        Explore the beauty and culture of {name}. From iconic
        landmarks to hidden gems, immerse yourself in an unforgettable
        experience.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#555",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default DetailsScreen;
