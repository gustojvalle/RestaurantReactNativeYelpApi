import { setStatusBarStyle, setStatusBarTranslucent } from 'expo-status-bar';
import React ,{useState, useEffect}from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({route}) => {
    const [restaurantData, setRestaurant] = useState({name:"", photos: []
});
    const ide = route.params.id;
    const restaurant = async (id) =>  {

        const response = await yelp.get(`/${id}`);
        let data = await response.data;
        setRestaurant(data);
        }
    
    useEffect(() => {restaurant(ide);}, [])

    
    console.log("yo")
    return(
    <View>
        <Text style={styles.nameStyle}>{restaurantData.name}</Text>
        <Image style={styles.imageStyle} source={{uri: restaurantData.photos[0]}}/>
        <Image style={styles.imageStyle} source={{uri: restaurantData.photos[1]}}/>
        <Image style={styles.imageStyle} source={{uri: restaurantData.photos[2]}}/>
    </View>
    );
}


const styles = StyleSheet.create({
    nameStyle: {
        marginTop:10, 
        fontWeight:"bold", 
        fontSize: 25, 
        alignSelf:"center", 
          }, 
    imageStyle:
    {
        height:200, 
        width: 250, 
        marginTop: 10, 
        alignSelf:"center", 
        borderRadius: 5,
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.7)" 

    }
});
export default ResultsShowScreen;