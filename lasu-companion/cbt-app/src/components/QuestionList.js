import React from 'react';
import Question from './Question';
import questions from '../cbt';

const QuestionList = () => {
  return (
    <div className="question-list">
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;