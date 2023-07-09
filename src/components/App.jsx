import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';


const App = () => {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);
 const options = ['good', 'neutral', 'bad'];

 const handleLeaveFeedback = option => {

  switch (option) {

    case 'good': setGood(prevGood => prevGood + 1);      
      break;
    case 'neutral': setNeutral(prevNeutral => prevNeutral + 1);      
      break;
    case 'bad': setBad(prevBad => prevBad + 1);      
      break;
  
    default:
      return;
  }
};

const countTotalFeedback = () => {
  const total = good + neutral + bad;
  return total;
};

const countPositiveFeedbackPercentage = () => {
  const positive = Math.round((good * 100) / countTotalFeedback());
  return positive;
}

return (
  <>
  <Section title='Please leave feedback'>
    < FeedbackOptions
     options={options}
     onLeaveFeedback = {handleLeaveFeedback} />
  </Section>
    
  <Section title='Statistics'>
  {countTotalFeedback() > 0 ?  
  (< Statistics 
   good={good}
   neutral={neutral}
   bad={bad}
   total={countTotalFeedback()}
   positivePercentage={countPositiveFeedbackPercentage()}/>)
  : (
    <Notification message="There is no feedback"></Notification>
  )}
</Section>
  </>
)
   
  };


// class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   handleLeaveFeedback = e => {
//     const {name} = e.target;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const positive = Math.round((this.state.good * 100) / this.countTotalFeedback());
//     return positive;
//   }

//   render() {
    
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//       <Section title='Please leave feedback'>
//         < FeedbackOptions
//          options = {this.state}
//          onLeaveFeedback = {this.handleLeaveFeedback} />
//       </Section>
        
//       <Section title='Statistics'>
//       {this.countTotalFeedback() > 0 ?  
//       (< Statistics 
//        good={good}
//        neutral={neutral}
//        bad={bad}
//        total={this.countTotalFeedback()}
//        positivePercentage={this.countPositiveFeedbackPercentage()}/>)
//       : (
//         <Notification message="There is no feedback"></Notification>
//       )}
//     </Section>
//       </>
//     )
//   }
// }

export default App;