import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';


const ResultsList = ({ title, results, navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            style={styles.text}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('ResultsShow', { id: item.id })
                        }
                    >
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                );
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 12,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        marginBottom: 10,
        color:'white'
    },
    text: {
        color:'white'
    }
});

export default withNavigation(ResultsList);