import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
    <ul className={css.Feedback__list}>
      
      {options.map(option => (
      <li className= {css.Feedback__item} key={option}>
    <button className={css.Feedback__btn}
    name={option}
    type="button" 
    onClick={() => onLeaveFeedback(option)}>
    {option}
    </button>
  </li>
))}
    </ul>
    </>
)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
  };

