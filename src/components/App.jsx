import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleLeaveFeedback = e => {
    const {name} = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positive = Math.round((this.state.good * 100) / this.countTotalFeedback());
    return positive;
  }

  render() {
    
    const { good, neutral, bad } = this.state;

    return (
      <>
      <Section title='Please leave feedback'>
        < FeedbackOptions
         options = {this.state}
         onLeaveFeedback = {this.handleLeaveFeedback} />
      </Section>
        
      <Section title='Statistics'>
      {this.countTotalFeedback() > 0 ?  
      (< Statistics 
       good={good}
       neutral={neutral}
       bad={bad}
       total={this.countTotalFeedback()}
       positivePercentage={this.countPositiveFeedbackPercentage()}/>)
      : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Section>
      </>
    )
  }
}

export default App;