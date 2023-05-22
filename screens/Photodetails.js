import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, Image, View} from 'react-native';
import photos from '../assets/photo';
import { PhotoContainer } from '../components';

const Photodetails = ({route}) => {
     const {photoId} = route.params;
    const [photo, setPhoto] = useState({});
    useEffect(() => {
    const fetchPhoto = async () => {
    try {
    const fondPhoto = photos.find((p) => p.id === photoId);
    if (fondPhoto) {
    setPhoto(fondPhoto);
}    
    } catch (error) {
         console.error('Error fetching product:', error);
    }
};
fetchPhoto();
}, [photoId] );
    return (
        <ScrollView >
             <Image source={photo.image } style={styles.image}  />
            <View style={styles.container}>
            <Text style={styles.name} >{photo.name}</Text>
            </View>
            <View>
            <Text style={styles.commentaire}>Commentaires</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda eos ullam veritatis enim.</Text>
            </View>
            <View>
            <Text>D'autres Epingles similaires</Text>
            <PhotoContainer/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: 150,
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
        
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
       
    },
    commentaire: {
        fontSize: 14,
        color: '#999',
        marginTop: 10,

    },
    
   image: {
      width: '100%',
      height: 350,
    },
})

export default Photodetails;
