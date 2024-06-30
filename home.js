import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Contact from '../components/contact';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Daftar Kontak</Text>
      <Contact
        navigation={navigation}
        gambar={require('../assets/fadlan.JPG')}
        judul="Fadlan"
        telpon="0765535531"
        alamat="Perum Baros"
        screen_title="About"
      />
      <Contact
        navigation={navigation}
        gambar={require('../assets/hawa.jpg')}
        judul="Hawa"
        telpon="085720919231"
        alamat="Alamat Hawa"
        screen_title="About"
      />
      <Contact
        navigation={navigation}
        gambar={require('../assets/syif.JPG')}
        judul="Syifa"
        telpon="076523931"
        alamat="Alamat Fadlan"
        screen_title="About"
      />
      {/* Tambahkan lebih banyak kontak jika diperlukan */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,  // Start from the top
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#841584',
  },
});

export default Home;
