import React,  {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {


    

    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();


    const filterResults = (p) => {
        return results.filter(item => {return item.price==p});
    } 
  


    return(<View style={styles.flex}>
           <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)}
           onTermSubmit={()  => searchApi(term)}/>
           {errorMessage 
            ? <Text >{errorMessage}</Text>
           :<Text style={{marginLeft:20, marginTop:10}}>We have found {results.length}</Text>}
            <ScrollView>
            <ResultsList businesses={filterResults('$')} title="Cost Effective" />
            <ResultsList businesses={filterResults('$$')} title="Bit Pricier"/>
            <ResultsList businesses={filterResults('$$$')} title="Big Spender"/>
            </ScrollView>
            </View>);
}

const styles = StyleSheet.create({
    flex: {
        flex:2 , 
    }
});

export default SearchScreen;