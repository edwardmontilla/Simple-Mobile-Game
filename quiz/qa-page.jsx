import React from 'react';
import { View } from 'react-native';
import QuizComponent from  './quiz-component'; // Adjust the path accordingly
import questions from './questions.json'; // Adjust the path accordingly
const QAPage = () => {
  // Replace this with your actual JSON data
  const ques = questions;

  return (
    <View style={{ flex: 1 }}>
      <QuizComponent questions={ques} />
    </View>
  );
};

export default QAPage;