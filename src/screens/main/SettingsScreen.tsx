import Icon from '@react-native-vector-icons/feather';
import React from 'react';
import { StyleSheet,View } from 'react-native';

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="wifi-off" color="#033f63" size={ 45 }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
});

export default SettingsScreen;
