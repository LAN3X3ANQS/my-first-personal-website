import React, { useState } from 'react';
import QuestionList from './components/QuestionList';
import questions from './cbt';

const App = () => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = answerIndex;
    setUserAnswers(updatedAnswers);
  };

  return (
    <div className="App">
      <h1>Computer-Based Test</h1>
      <QuestionList questions={questions} userAnswers={userAnswers} onAnswerSelect={handleAnswerSelect} />
    </div>
  );
};

export default App;