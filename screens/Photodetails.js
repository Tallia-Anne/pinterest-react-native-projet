import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, Image, View} from 'react-native';
import photos from '../assets/photo';
import { PhotoContainer } from '../components';
import { Input } from '@rneui/themed';


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
             <Image source={photo.image } style={styles.image}   />
            <View style={styles.container}>
            <Text style={styles.name} >{photo.name}</Text>
            </View>
            <View style={styles.containercommentaire}>
            <Text style={styles.commentaire}>Commentaires</Text>
            <Text>Vous aimez cette epingle ? Dites-le à {photo.author}  </Text>
             <Input
                placeholder='Ajouter un commentaire '
                style={styles.input}
                />
            </View>
            <View style={styles.epingles}>
            <Text  style={styles.textepingles}>D'autres Epingles similaires</Text>
            <PhotoContainer/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 150,
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
        
    },
image: {
      width: '100%',
      height: 350,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
       
    },
    containercommentaire:{
        width: '100%',
        height: 150,
        alignItems: 'center',
        marginBottom: 10,
},
    commentaire: {
        fontSize: 18,
        color: '#000',
        paddingBottom: 10,
        fontWeight: '500'

    },

inputcommentaire: {
width: 100,
borderColor: '#000',
},

    

epingles: {

 alignItems: 'center',
},
textepingles: {
fontSize: 18,
        color: '#000',
        paddingBottom: 10,
        fontWeight: '500',
}
})

export default Photodetails;
