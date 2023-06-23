import css from './StatisticItems.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './colorRandom';

export const StatisticsItems = ({ id, label, percentage }) => {
  return (
    <li
      className={css.item}
      key={id}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}&#37;</span>
    </li>
  );
};

StatisticsItems.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
