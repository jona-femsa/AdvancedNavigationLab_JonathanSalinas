import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { FeedStackParamList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";

type SearchScreenNavigationProp = NativeStackNavigationProp<
  FeedStackParamList,
  'Search'
>;

const items = [
  { id: 3, name: "Tokyo" },
];

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();

  const render = ({item}: { item: {id: number; name: string}}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => 
        navigation.navigate('Details', {
          id: item.id, name: item.name
        })
      }
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <Text>Resultados...</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={render}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
    marginBottom: 5,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default SearchScreen;
