import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '@react-native-vector-icons/feather';
import { useNavigation } from '@react-navigation/native';

type CustomHeaderProps = {
  title: string;
  showBackButton?: boolean; // Propiedad opcional
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, showBackButton = false }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconButton: {
    padding: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});

export default CustomHeader;
