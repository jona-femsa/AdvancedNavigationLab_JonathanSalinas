import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

import { FeedStackParamList } from '../../navigation/types';

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
      <Text style={styles.subtitle}>ID: {id}</Text>
      <Text style={styles.description}>
        Eres amigo de { name } desde hace 5 años
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default DetailsScreen;
