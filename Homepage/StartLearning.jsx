import React from 'react';
import { View, Button } from 'react-native';
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