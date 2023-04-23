import user from 'components/user.json';
import data from 'components/data.json'
import friends from 'components/friends.json'
import transactions from 'components/transactions.json'
import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from 'components/FriendList/FriendList'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Profile   username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes} />

    <Statistics stats = {data} />

    <FriendList  friends = {friends}/>

    <TransactionHistory  items ={transactions}/>

    </div> 
  );
};
