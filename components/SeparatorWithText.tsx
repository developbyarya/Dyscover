import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SeparatorWithText = ({ text = 'Atau' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#8300ba', // Customize as needed
  },
  text: {
    marginHorizontal: 8,
    color: '#8300ba',
    fontWeight: 'bold',
  },
});

export default SeparatorWithText;
