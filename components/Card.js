import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';


const Card = ({photo, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} >
        <View style={styles.container}>
            <Image source={photo.image} style={styles.image}/>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
       borderRadius: 8,
        padding: 16,
        width: 150,
        height: 220,
        alignItems: 'center',
        marginBottom: 10,  
},
image: {
width: 150,
height: 180,
borderRadius: 8,
},
 name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },


})

export default Card;
