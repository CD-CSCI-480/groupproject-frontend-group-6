import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/Colors';
import ContactRow from '../components/ContactRow'; // Import the ContactRow component

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Efficient Contact List </Text>
      <ContactRow text={<BlackText>Need legal information?</BlackText>} isBlueBackground={false} />
      <ContactRow text={<BlackText>Contact: Sarah Peterson</BlackText>} isBlueBackground={true} />
      <ContactRow text={<BlackText>302-564-8547</BlackText>} isBlueBackground={true} />
      <ContactRow text={<BlackText>Are you a business person?</BlackText>} isBlueBackground={false} />
      <ContactRow text={<BlackText>Contact: Bill William</BlackText>} isBlueBackground={true} />
      <ContactRow text={<BlackText>302-458-6712</BlackText>} isBlueBackground={true} />
      <ContactRow text={<BlackText>Looking for a job?</BlackText>} isBlueBackground={false} />
      <ContactRow text={<BlackText>Contact: Timothy Benson</BlackText>} isBlueBackground={true} />
      <ContactRow text={<BlackText>302-599-8776</BlackText>} isBlueBackground={true} />
      <ContactRow text={<BlackText>Looking for appointment assistance?</BlackText>} isBlueBackground={false} />
      <ContactRow text={<BlackText>Go to the Appointment Chat Room</BlackText>} isBlueBackground={true} />
      <ContactRow text={<BlackText>Text with Taylor Rose</BlackText>} isBlueBackground={true} />
    </View>
  );
};

const BlackText = ({ children }) => (
  <Text style={{ color: 'black' }}>{children}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.white,
  },
});

export default ContactScreen; // Make sure to export the component
