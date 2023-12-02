import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartLearningScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // or use navigation.navigate('YourPreviousScreen')
  };

  return (
    <View>
      {/* Your screen content here */}
      <Button title=" ⬅️ Back" onPress={handleGoBack} style={styles.button} />
    </View>
  );
};

export default StartLearningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: 'lightblue',
    paddingVertical: 20, 
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});