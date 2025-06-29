import React from 'react';

const Question = ({ question, options, onAnswerSelected }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="answer"
              value={option}
              onChange={() => onAnswerSelected(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;