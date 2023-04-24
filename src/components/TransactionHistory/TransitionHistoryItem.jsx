import PropTypes from 'prop-types'
import css from 'components/TransactionHistory/TransitionHistoryItem.module.css'
export const TransitionHistoryItem = ({ type, amount, currency}) => {
    return (<>
    <tr>
      <td className={css.items}>{type}</td>
      <td className={css.items}>{amount}</td>
      <td className={css.items}>{currency}</td>
    </tr>
    </>

    )
}

TransitionHistoryItem.propTypes = {
    type:  PropTypes.string.isRequired,
    amount:  PropTypes.string.isRequired,
    currency:  PropTypes.string.isRequired
  }