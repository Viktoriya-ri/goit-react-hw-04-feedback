import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import IsEmptyNotification from './Notification/Notification';
import { Wrapper } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(s => s+1);
        break;

      case 'neutral':
        setNeutral(s => s+1);
        break;

      case 'bad':
        setBad(s => s+1);
        break;
      default:
        throw new Error('Invalid option');
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = (good / total) * 100;
  return (
    <Wrapper>
      <Section>
        <FeedbackOptions
          onClick={handleClick}
          options={Object.keys({good,neutral,bad})} // Разобрать
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />{' '}
        {total === 0 && <IsEmptyNotification />}
      </Section>
    </Wrapper>
  );
};

export default App;
