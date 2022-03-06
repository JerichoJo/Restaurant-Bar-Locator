import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View 
            style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.review}>{result.rating} Stars, {result.review_count} Reviews</Text>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,

    },
    image: {
        marginBottom: 5,
        width: 250,
        height: 120,
        borderRadius: 10,
        borderColor: 'lightsteelblue',
        borderWidth: 3
    },
    name: {
        fontWeight: 'bold',
        color:'white'
	},
    review: {
        color:'white'
    }
});

export default ResultsDetail;