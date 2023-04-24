import css from 'components/Statistics/Statistics.module.css'
import { StatisticsList } from 'components/Statistics/StatisticsList'
import PropTypes from 'prop-types'; 

export const Statistics =( { stats, title } ) => {
return <section className={css.statistic}>
  {title && <h2 className={css.title}>{title}</h2>}


<ul className={css.stat_list}>
  {stats.map(({id, label, percentage}) => <StatisticsList key={id}
  label={label}
  percentage={percentage} />)}
</ul>
</section>
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.exact({ 
      id: PropTypes.string.isRequired, 
      label: PropTypes.string.isRequired, 
      percentage: PropTypes.number.isRequired,
      title: PropTypes.string}))
}