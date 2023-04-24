import css from 'components/FriendList/FriendListItem.module.css'
import PropTypes from 'prop-types'; 

export const FriendListItem = ({isOnline, avatar, name, }) => {return (<>
<li className={css.item}> 
  <span className={isOnline ? css.online : css.ofline}></span> 
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
</>

)}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    isOnline: PropTypes.bool.isRequired,
  }
