import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Contact = (props) => {
  const { navigation, gambar, judul, telpon, alamat, screen_title } = props;
  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.tel}>{telpon}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title={screen_title} 
          onPress={() => navigation.navigate('About', { judul, telpon, alamat })}
          color="#841584"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  textContainer: { 
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  tel: {
    fontSize: 14,
    color: '#3498db',
  },
  buttonContainer: {
    justifyContent: 'center',
  }
});

export default Contact;
