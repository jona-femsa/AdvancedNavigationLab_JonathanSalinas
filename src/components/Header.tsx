import Icon from '@react-native-vector-icons/feather';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Icon name="message-square" size={30} color="#033f63" />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* Ícono de menú para abrir el Drawer */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
        <Icon name="menu" size={30} color="#033f63" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    height: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    color: '#033f63',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
});

export default Header;
