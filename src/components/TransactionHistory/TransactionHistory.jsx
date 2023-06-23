import { Transaction } from './Transaction/Transaction';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{items.map(Transaction)}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = { items: PropTypes.array };
