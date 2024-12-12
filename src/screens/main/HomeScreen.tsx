import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FeedStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/feather';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  FeedStackParamList,
  'Home'
>;

const items = [
  { id: 1, name: 'Ironman' },
  { id: 2, name: 'Scarlet Witch' },
  { id: 3, name: 'Spiderman' },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const render = useMemo(
    () => ({item}: { item: {id: number; name: string}}) => (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate('Details', {
            id: item.id, name: item.name,
          })
        }
      >
        <Icon name="thumbs-up" color="#033f63" size={22}/>
        <Text style={styles.itemName}>{item.name}</Text>
      </TouchableOpacity>
    ),
    [navigation]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Amigos</Text>
      <FlatList
        data={ items }
        keyExtractor={(item) => item.id.toString()}
        renderItem={ render }
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
});

export default HomeScreen;
