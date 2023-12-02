import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from '../DarkModeContext';


const HomePage = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigation = useNavigation();

  const handleStartLearning = () => {
    // Navigate to StartLearning component
    navigation.navigate('StartLearning');
  };

  const handleLevelSelection = () => {
    // Navigate to TestYourself component
    navigation.navigate('LevelSelection');
  };

  const handleAboutUs = () => {
    // Navigate to AboutUs component
    navigation.navigate('AboutUs');
  };

  const handleSettings = () => {
    // Handle navigation to the settings screen or any other logic
    navigation.navigate('Settings');  
  };

  return (
    <View style={[styles.container,{backgroundColor: darkMode ? 'black' : '#77cff1'}]}>
      <View style={styles.imageContainer}>
      <Image
        source={{ uri: 'data:image/webp;base64,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' }}
        style={styles.image}
      />
    </View>
      <Text style={styles.subHeading}>
        Your gateway to coding excellence. Learn, code, and achieve your programming goals
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleStartLearning}>
        <Text style={styles.buttonText}>🚀 Start Learning </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLevelSelection}>
        <Text style={styles.buttonText}>🎓 Test Yourself</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAboutUs}>
        <Text style={styles.buttonText}>📖 About us </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSettings}>
        <Text style={styles.buttonText}>⚙️ Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingVertical: 20, 
    paddingHorizontal: 10, 
  },

  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'yellow',
    margin: 10,
  },

  imageContainer: {
    marginTop: -20,
    marginBottom: 20,
    paddingBottom: 5,
  },
  

  subHeading: {
    fontFamily: 'roboto',
    fontSize: 15,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'left',
    fontStyle: 'italic',
  },

  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fddb53',
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 5,
  },

  button: {
    backgroundColor: '#fdcc04',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    width: 200,
  },

  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;
