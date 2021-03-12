import React from 'react';  
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'; 


const RestaurantCard = ({result, navi}) => {
    return(
        <View style = {styles.container}
        ><TouchableOpacity onPress={() => navi.navigate('Detailed', {id: result.id})}>
            <Image
             style={styles.image} source={{uri: result.image_url}}/>
            <Text   style={styles.name, styles.margin}>{result.name}</Text>
            <Text style={styles.margin}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </TouchableOpacity>    
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        marginLeft: 20, 
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.7)", 
        borderRadius: 8, 
        
    }, 
    image: {
        width:250, 
        height:180,
        borderTopRightRadius:  7,
        borderTopLeftRadius:7,  
     

    }, 
    name: {
        fontWeight: "bold", 
        fontSize: 14, 
    }, 
    margin: {
        marginLeft: 2,
    }
});

export default RestaurantCard;