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
import { DarkModeProvider } from './DarkModeContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <DarkModeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        // screenOptions={{ headerShown: false }} this is to get rid of the header stacks
        >
          <Stack.Screen name="🏠" component={HomePage} />
          <Stack.Screen name="StartLearning" component={StartLearning} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="LevelSelection" component={LevelSelection} />
          <Stack.Screen name="QAPage" component={QAPage} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="SaveSettings" component={SaveSettings} />
        </Stack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;
