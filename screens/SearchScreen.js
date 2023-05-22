import React, {useState} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import { Input } from '@rneui/themed';
import photos from '../assets/photo';
const searchphoto = require('../assets/search.jpg');
import { PhotoContainer } from '../components';

const SearchScreen = () => {
const [search, setSearch] = useState('');

const handleChange = (e) => {
setSearch(e.target.value);
};
 
if(search.lenght > 0){
photos.filter((photo) => {
return photo.name(search)
} )
}

    return (
        <View style={styles.container}>
             <Input placeholder='Barre de recherche'  
            style={styles.input} 
            keyboardType='numeric'
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
            <PhotoContainer />
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
