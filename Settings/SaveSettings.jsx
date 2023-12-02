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
            <Image
                source={{ uri:'https://static.vecteezy.com/system/resources/previews/000/496/056/original/vector-settings-icon-design.jpg' }}
                style={styles.image}
            />
            <Text style={styles.subheading}>
                The changes has been successfully saved!
            </Text>

            <View>
            <Button title=" Go Back" onPress={handleSaveSettings} />
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
    paddingVertical: 20, 
    paddingHorizontal: 10, 
},

  subheading: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'left',
    color: 'black',
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
    width: 100,
    height: 100,
    resizeMode: 'contain',
},
});

export default SaveSettings;