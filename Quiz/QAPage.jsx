

import React from 'react';
import { View } from 'react-native';
import QuizComponent from  './QuizComponent'; // Adjust the path accordingly
import questions from './questions.json'; // Adjust the path accordingly
import { useDarkMode } from '../DarkModeContext';


const QAPage = () => {
  // Replace this with your actual JSON data
  const ques = questions;

  // useDarkMode hook
  const { darkMode, toggleDarkMode } = useDarkMode();


  return (
    <View style={{ flex: 1 , backgroundColor: darkMode ? 'black': '#77cff1'}}>
      <QuizComponent questions={ques} />
    </View>
    
    
  );
};

export default QAPage;