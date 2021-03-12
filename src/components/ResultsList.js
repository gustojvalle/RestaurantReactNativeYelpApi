import React , {useEffect} from 'react'; 
import {View, Text, StyleSheet, FlatList} from 'react-native';
import RestaurantCard from './RestaurantCard';
import {useNavigation} from '@react-navigation/native';


 
// RNLocation.configure({ distanceFilter: null });
// RNLocation.getLatestLocation({ timeout: 60000 })
//   .then(latestLocation => {
//     // Use the location here
//   })
const ResultsList = ({title, businesses}) => {
    const navigation=useNavigation();

    if (!businesses.length){
        return null;
    }


    
    return(
        <View style={styles.listStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style= {{marginLeft: 20}}>Results: {businesses.length}</Text>
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={businesses}
            keyExtractor={(result)=> result.id}
            renderItem={({item}) => {return(<RestaurantCard navi={navigation} result={item}/>);}}
            />
        </View>
        );
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:20, 
        fontWeight: "bold",
        marginLeft: 20,  
    }, 
    listStyle: {
        marginTop: 5, 
    }
}); 
export default ResultsList;