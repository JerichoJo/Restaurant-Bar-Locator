import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = ({  }) => {
    
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price ==== '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? < Text >{errorMessage}</Text> : null}
            
            <ScrollView style={styles.bg}>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="More Cost Effective Options" />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="A Little Pricier" />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Extravagant Options" />
                <ResultsList
                    style={styles.pictures}
                    results={filterResultsByPrice('$$$$')}
                    title="Most Expensive Options" />
            </ScrollView> 
        </>
    );

};

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'darkkhaki',
        
    },
    pictures: {
        borderRadius: 15,
        borderWidth: 5,
        borderColor: 'white'
    }

});

export default SearchScreen;