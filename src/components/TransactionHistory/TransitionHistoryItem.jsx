import PropTypes from 'prop-types'
import css from 'components/TransactionHistory/TransitionHistoryItem.module.css'
export const TransitionHistoryItem = ({ id, type, amount, currency}) => {
    return (<>
    <tr key={id}>
      <td className={css.items}>{type}</td>
      <td className={css.items}>{amount}</td>
      <td className={css.items}>{currency}</td>
    </tr>
    </>

    )
}

TransitionHistoryItem.propTypes = {
    id:  PropTypes.string,
    type:  PropTypes.string,
    amount:  PropTypes.string,
    currency:  PropTypes.string
  }