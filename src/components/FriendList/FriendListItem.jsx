import css from 'components/FriendList/FriendListItem.module.css'
import PropTypes from 'prop-types'; 

export const FriendListItem = ({ id, isOnline, avatar, name, }) => {return (<>
<li className={css.item} key={id}>
  {isOnline ? <span className={css.online}></span> : <span className={css.ofline}></span>}
  
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
</>

)}

FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    isOnline: PropTypes.bool,
    id: PropTypes.number
  }
