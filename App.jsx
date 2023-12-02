import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Homepage/HomePage';
import StartLearning from './Homepage/StartLearning';
import AboutUs from './Homepage/AboutUs';
import LevelSelection from './Level/LevelSelection';
import Settings from './Settings/Settings';
import SaveSettings from './Settings/SaveSettings';
import QAPage from './Quiz/QAPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="🏠" component={HomePage} />
        <Stack.Screen name="StartLearning" component={StartLearning} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="LevelSelection" component={LevelSelection} />
<<<<<<< Updated upstream
        <Stack.Screen name="QAPage" component={QAPage} />
=======
>>>>>>> Stashed changes
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SaveSettings" component={SaveSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
