import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(<View style= {styles.background}>
            <TextInput placeholder="Search"
            value={term}
            onChangeText= {term => onTermChange(term)}
            onEndEditing= {() => onTermSubmit()}/>
        </View>);
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#F0EEEE", 
        borderWidth: 1, 
        width: "90%", 
        borderRadius: 5, 
        alignSelf: "center", 
        marginTop: 10, 
    }

});

export default SearchBar;