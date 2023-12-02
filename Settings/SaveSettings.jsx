import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SaveSettings = () => {
    const navigation = useNavigation();
    const handleSaveSettings = () => {
        navigation.navigate('Settings');
    };


    return (
        <View style={styles.container}>

            <Text style={styles.subheading}>
                The changes has been successfully saved! 
            </Text>

            <View>
            <Image
                source={{ uri:'https://freepngimg.com/thumb/facebook/65435-thumb-icons-button-up-computer-facebook-thumbs.png' }}
                style={styles.image}
            />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: 'lightblue',
    paddingVertical: 50, 
    paddingHorizontal: 50, 
},

  subheading: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#666',
},

  button: {
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    width: 50,
    textAlign: 'center',
    
},

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignItems: 'center',
},
});

export default SaveSettings;