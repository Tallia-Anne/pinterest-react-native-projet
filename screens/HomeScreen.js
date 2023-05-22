import React from 'react';
import { Button } from '@rneui/themed';
import {View, StyleSheet, ImageBackground, Text, Image } from 'react-native';
const homeimage = require('../assets/homeimg.jpg');
const logo = require('../assets/174863.png');
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container} >
            <ImageBackground source={homeimage} style={styles.image}>
           
            <View style={styles.containerbutton}>
            <Image source={logo} style={styles.logo} />
            <Text  style={styles.textbienvenu}  >Bienvenue a Pinterest</Text>
            <Button color="error" onPress={() => navigation.navigate('PhotoScreen')} >Commencer la pinterest'</Button>
            </View> 
             </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
logo: {
width: 150,
height: 150,
},
    image : {
    flex: 1,
    width:'100%',
    height:'100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
},
containerbutton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbienvenu: {
    color: 'white',
    fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20,
      },

})

export default HomeScreen;
