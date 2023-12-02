import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartLearningScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // or use navigation.navigate('YourPreviousScreen')
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the Learning Hub</Text>
        <Text style={styles.subHeaderText}>
          Expand your knowledge and enhance your coding skills.
        </Text>
      </View>

      <View style={styles.content}>
        {/* Placeholder Image */}
        <Image
          source={{ uri: 'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-29-1024.png' }}
          style={styles.image}
        />
        <Text style={styles.paragraph}>
          Whether you are a beginner or an experienced developer, continuous learning is crucial in the dynamic field of coding.
        </Text>

        <Text style={styles.paragraph}>
          Start by mastering fundamental concepts like variables, loops, and conditionals. Progress to advanced topics such as data structures, algorithms, and design patterns.
        </Text>

        <Text style={styles.paragraph}>
          Stay updated with the latest technologies and frameworks to stay competitive in the ever-evolving world of software development.
        </Text>

      </View>
      <Button title=" ⬅️ Back" onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  image: {
    width: '250',
    height: 240, // Adjust as needed
    borderRadius: 8,
    marginBottom: 16,
  },

});

export default StartLearningScreen;
