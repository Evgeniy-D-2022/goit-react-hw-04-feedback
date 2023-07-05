import css from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => (
    <>
    <ul className={css.Statistics__list}>
        <li className={css.Statistics__item}>
          <p className={css.Statistics__text}>Good: {good}</p></li>
        <li className={css.Statistics__item}>
          <p className={css.Statistics__text}>Neutral: {neutral}</p></li>
        <li className={css.Statistics__item}>
          <p className={css.Statistics__text}>Bad: {bad}</p></li>
        <li className={css.Statistics__item}>
          <p className={css.Statistics__text}>Total: {total}</p></li>
        <li className={css.Statistics__item}>
          <p className={css.Statistics__text}>Positive feedback: {positivePercentage}%</p></li>

      </ul>
    </>
)

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };