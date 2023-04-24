import PropTypes from 'prop-types'
import { TransitionHistoryItem } from 'components/TransactionHistory/TransitionHistoryItem'
import css from 'components/TransactionHistory/TransactionHistory.module.css'
export const TransactionHistory = ({items}) => {
    return (<table className={css.transaction_history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {items.map(({id, type, amount, currency}) => 
      <TransitionHistoryItem 
      key ={id}
      type ={type}
      amount ={amount}
      currency ={currency}/> )}
    </tbody>
  </table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({ 
        id: PropTypes.string.isRequired, 
        type:  PropTypes.string.isRequired,
        amount:  PropTypes.string.isRequired,
        currency:  PropTypes.string.isRequired}))
  }