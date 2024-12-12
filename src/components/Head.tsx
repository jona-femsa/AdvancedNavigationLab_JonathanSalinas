import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@react-native-vector-icons/feather';
import { useNavigation } from '@react-navigation/native';

type HeadProps = {
  title: string;
  showBackButton?: boolean;
};

const Head: React.FC<HeadProps> = ({ title, showBackButton = false }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headContainer}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Título alineado a la izquierda */}
      <View style={[styles.titleContainer, showBackButton && styles.titleWithBack]}>
        <Text style={styles.headTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    height: 60,
    backgroundColor: '#033f63',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderBottomColor: '#7c9885',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 40,
  },
  headTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  titleWithBack: {
    marginLeft: 40,
  },
});

export default Head;
