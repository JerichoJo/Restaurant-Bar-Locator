import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";


const HomeScreen = ({navigation}) => {

    const [text, setText] = React.useState('');
    
    return (
    <>
        <View style={styles.WelcomeText}>
            <Text style={styles.WelcomeText}>Welcome!</Text>
        </View>

        <View style={styles.TextView}>
            <TextInput 
            style={styles.InputText}
            onChangeText={newText => setText(newText)}
            placeholder="Enter City"
            ></TextInput>
        </View>
        <Text>{text}</Text>
        
    </>
)};



const styles = StyleSheet.create({
   InputText: {
        fontSize: 15,
        alignSelf: 'center',
        alignContent: 'center',
        height: 40,
        borderRadius: 10,
        width: 200,
        margin: 12,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        color: 'white'
   },
   TextView: {
       position: 'absolute',
       alignSelf: 'center',
       top:'20%'
   },
   WelcomeText: {
       position: 'absolute',
       fontSize: 20,
       top: '15%',
       color:'white',
       alignSelf:'center',
       alignItems: 'center',

   }

});



export default HomeScreen;