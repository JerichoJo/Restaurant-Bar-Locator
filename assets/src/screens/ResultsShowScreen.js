import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Linking, FlatList, Image } from 'react-native';
import Yelp from '../api/Yelp';
import { AntDesign } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import openMap from 'react-native-open-maps';

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

    const webURL = result.url;

    return (
        
        <View style={styles.bg}>
            <Text style={styles.header}>{result.name}</Text>
            <View style={{alignSelf:'center'}}>
            <StarRating 
                disabled={false}
                rating={result.rating}
                maxStars={5}
                starSize={16}
                fullStarColor={'gold'}
                emptyStarColor={'gold'}
                containerStyle={styles.starsContainer}
                
            />
            <Text style={{color:'white', alignSelf:'center'}}>{result.review_count} Reviews</Text>
            </View>

            <View style={{alignSelf:'center', padding: 4, alignItems:'center'}}>


            {/* CONTACT INFO */}
            
            
            <Text style={{color: 'white', fontSize: 20}}>
                <AntDesign name="phone" size={20} color="white" />
                {" "}{result.display_phone}
            </Text>

            {/* WEBSITE */}
            <Text style={{color: 'white', fontSize: 20}}>
                
                <TouchableOpacity 
                
                onPress={ ()=>{ Linking.openURL(webURL)}}
                >
                    <Text style={{color: 'lightsteelblue', fontSize: 20}}>
                    <MaterialCommunityIcons name="web" size={20} color="white"/>
                        {" "}{result.name} 
                        
                        </Text>

                </TouchableOpacity>
                </Text>


            {/* ADDRESS/LOCATION */}

            <TouchableOpacity 
                
                onPress={ ()=>{ openMap({
                    latitude: result.coordinates.latitude, 
                    longitude: result.coordinates.longitude,
                    zoom:35
                })}}
                >
            <Text style={{color: 'gold', fontSize: 18, padding: 5}}>
            <EvilIcons name="location" size={24} color="gold" />
                {result.hours.open}
                {result.location.address1}{", "}
                {result.location.city}{", "}
                {result.location.state}
                
                </Text>
                </TouchableOpacity>
            </View>
            


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
        borderColor:'white',
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
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5
    },
    bg: {
        backgroundColor: 'green',
        flex: 1,

        
    },
    starsContainer: {
        width:100,
        alignSelf:'center',
        margin:10

    }
    
});

export default ResultsShowScreen;