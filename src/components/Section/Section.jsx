import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children}) => (
    <section className={css.Container}>
    <h1 className={css.Section__title}>{title}</h1>
    {children}
  </section>

)

export default Section;


Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };