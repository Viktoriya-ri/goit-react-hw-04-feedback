import React from 'react';
import { Button, ButttonWrapper } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onClick, options }) => {
  return (
    <ButttonWrapper className="button-wrapper">
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onClick(option)}
          data-option={option}
        >
          {option}
        </Button>
      ))}
    </ButttonWrapper>
  );
};
export default FeedbackOptions;
