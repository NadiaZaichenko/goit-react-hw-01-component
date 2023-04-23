import PropTypes from 'prop-types'; 
import css from 'components/Statistics/StatisticsList.module.css'
export const StatisticsList = ( {id, label, percentage}) => {
 return ( <> 
 <li className={css.item} key={id}>
 <span className={css.label}>{label} </span>
 <span className={css.percentage}>{percentage} </span>
</li>
</> )
}
StatisticsList.propTypes = {
     id: PropTypes.string, 
     label: PropTypes.string, 
     percentage: PropTypes.number,
}
