import PropTypes from 'prop-types'; 
import { FriendListItem } from 'components/FriendList/FriendListItem'
import css from 'components/FriendList/FriendList.module.css'
export const FriendList = ({friends}) => {
  return <ul className={css.friends_list}>
{friends.map(({id, isOnline, avatar, name}) => <FriendListItem key={id}
isOnline ={isOnline} 
avatar = {avatar} 
name = {name}
 />)}
</ul>
}

FriendList.propTypes = {
    freinds: PropTypes.arrayOf(PropTypes.exact({ 
        avatar: PropTypes.string, 
        name: PropTypes.string, 
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired}))
  }