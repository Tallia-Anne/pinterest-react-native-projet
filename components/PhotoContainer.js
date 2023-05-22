import React from 'react';
import {View, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import photos from '../assets/photo';
import Card from './Card';
const PhotoContainer = () => {
const navigation = useNavigation();
       return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                {
                photos.map(photo => (
                   <View key={photo.id} style={styles.cardContainer}>
                     <Card photo={photo} onPress={() => {
navigation.navigate('Photodetails', {photoId: photo.id})
} }  /> 
                 </View>
))
}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    height: '100%',
},

    photoContainer: {
         flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 15,

},cardContainer: {
     flexBasis: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 5,
}
})

export default PhotoContainer;
