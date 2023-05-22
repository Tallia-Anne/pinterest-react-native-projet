import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import { PhotoContainer } from '../components';
const PhotoScreen = () => {
    return (
        <ScrollView style={styles.container}>
           <PhotoContainer/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
})

export default PhotoScreen;
