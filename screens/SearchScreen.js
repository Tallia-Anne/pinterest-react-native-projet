import React, {useState} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import { Input } from '@rneui/themed';
import photos from '../assets/photo';
const searchphoto = require('../assets/search.jpg');
import { PhotoContainerSearch } from '../components';

const SearchScreen = () => {
 const [search, setSearch] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  // Cette fonction permet lancer deux fonctions setSearch (qui va mettre à jour  l'etat de search ) et 
  const handleChange = (text) => {
    setSearch(text);
    filterPhotos(text);
  };
// Cette fonction permet de filtrer la liste des photos grâce la methode filter()
  const filterPhotos = (text) => {
    const filtered = photos.filter((photo) => {
      // cela va fitrer les nom des photos qui va permet quand l'utilisateur entrée est dans la recherche ça va transformer en miniscule
      return photo.name.toLowerCase().includes(text.toLowerCase());
    });
    //Met à jour l'état filteredPhotos avec le tableau filtré. Cela permet de stocker les photos filtrées dans l'état.
    setFilteredPhotos(filtered);
  };

    return (
        <View style={styles.container}>
             <Input placeholder='Barre de recherche'  
            style={styles.input} 
            keyboardType='text'
            rightIcon={{
            type:'fondation',
            name: 'camera'
            }}
            onChangeText={handleChange}
            value={search}
            />
            <View style={styles.containerimage}>
              <Image source={searchphoto} style={styles.image} />
           
            </View>
            <ScrollView style={styles.container}>
            <PhotoContainerSearch photos={filteredPhotos} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
input: {
flex: 1,
paddingBottom: 10,
},
containerimage: {
width: '100%',
height: 200,
borderRadius: 22,
},
image: {
width: '100%',
height: '100%',
resizeMode: 'cover',

}

})

export default SearchScreen;
