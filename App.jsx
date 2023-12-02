import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Homepage/HomePage';
import StartLearning from './Homepage/StartLearning';
import AboutUs from './Homepage/AboutUs';
import LevelSelection from './Level/LevelSelection';
<<<<<<< HEAD
import Settings from './Settings/Settings';
import SaveSettings from './Settings/SaveSettings';
import QuizComponent from './Quiz/QuizComponent';

=======
import QuizComponent from './quiz/quiz-component';
import Settings from './settings/settings';
import QAPage from './quiz/qa-page';
>>>>>>> 0ef43dfb6a6b7e8ec188892ac3be741e941434be

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="🏠" component={HomePage} />
        <Stack.Screen name="StartLearning" component={StartLearning} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="LevelSelection" component={LevelSelection} />
        <Stack.Screen name="QuizComponent" component={QuizComponent} />
        <Stack.Screen name="Settings" component={Settings} />
<<<<<<< HEAD
        <Stack.Screen name="SaveSettings" component={SaveSettings} />
=======
        <Stack.Screen name="QAPage" component={QAPage} />
>>>>>>> 0ef43dfb6a6b7e8ec188892ac3be741e941434be
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
