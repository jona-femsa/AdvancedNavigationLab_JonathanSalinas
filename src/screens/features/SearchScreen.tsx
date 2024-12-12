import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from "react-native";
import { FeedStackParamList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import Icon from "@react-native-vector-icons/feather";

type SearchScreenNavigationProp = NativeStackNavigationProp<
  FeedStackParamList,
  'Search'
>;

const items = [
  { id: 10, name: "Batman" },
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
      <Icon name="thumbs-down" color="#033f63" size={22}/>
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Buscar"
        value="Bat..."
        editable={false}
      />
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
    padding: 20,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: '#033f63',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#7c9885',
    marginVertical: 5,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    color: '#033f63',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  input: {
    height: 45,
    backgroundColor: '#f4f4f4',
    borderColor: '#7c9885',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    color: '#033f63',
    marginVertical: 10,
    opacity: 0.6,
  },
});

export default SearchScreen;
