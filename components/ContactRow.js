import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/Colors';

const ContactRow = ({ text, isBlueBackground }) => {
  return (
    <View style={[styles.row, isBlueBackground ? styles.blueBackground : styles.whiteBackground]}>
      <Text style={styles.rowText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
  rowText: {
    fontSize: 16,
    color: colors.blue,
  },
  blueBackground: {
    backgroundColor: colors.blue,
  },
  whiteBackground: {
    backgroundColor: colors.white,
  },
});

export default ContactRow;
