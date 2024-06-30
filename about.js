import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({ route, navigation }) => {
  const { judul, telpon, alamat } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nama: {judul}</Text>
      <Text style={styles.telp}>No Telpon: {telpon}</Text>
      <Text style={styles.alamat}>Alamat: {alamat}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
          color="#841584"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'col',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  telp: {
    fontSize: 18,
    marginBottom: 10,
    color: '#3498db',
  },
  alamat: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default About;
