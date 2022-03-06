import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Yelp from '../api/Yelp';
import { Entypo } from '@expo/vector-icons'; 
import StarRating from 'react-native-star-rating';


const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);

    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        
        <View style={styles.bg}>
            <Text style={styles.header}>{result.name}</Text>
            
            <StarRating 
                disabled={false}
                rating={result.rating}
                maxStars={5}
                starSize={20}
                fullStarColor={'gold'}
                emptyStarColor={'gold'}
                containerStyle={styles.starsContainer}
                
            />
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item   }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderColor:'lightsteelblue',
        borderWidth: 2,
        borderRadius:20,
        padding: 125,
        margin:5,
        alignSelf: 'center'
    },
    header: {
        fontSize: 20,
        alignSelf:'center',
        padding: 10,
        margin: 10,
        color: 'white',
        fontWeight:'bold',
        borderColor: 'lightsteelblue',
        borderWidth: 2,
        borderRadius: 5
    },
    bg: {
        backgroundColor: 'grey',
        borderColor:'lightsteelblue',
        borderWidth: 5,
        flex: 1
        
    },
    starsContainer: {
        width:100,
        alignSelf:'center',
        margin:10

    }
    
});

export default ResultsShowScreen;