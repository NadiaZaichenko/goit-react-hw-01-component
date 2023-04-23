import css from 'components/Statistics/Statistics.module.css'
import { StatisticsList } from 'components/Statistics/StatisticsList'
import PropTypes from 'prop-types'; 

export const Statistics =( { stats } ) => {
return <section className={css.statistic}>
  {stats.title ? <h2 className={css.title}>{stats.title}</h2> : false}


<ul className={css.stat_list}>
  {stats.map(({id, label, percentage}) => <StatisticsList key={id}
  label={label}
  percentage={percentage} />)}
</ul>
</section>
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.exact({ 
      id: PropTypes.string, 
      label: PropTypes.string, 
      percentage: PropTypes.number}))
}