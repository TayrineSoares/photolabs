import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

// Receive topics data from the parent HomeRoute
const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs </span>
      {/*send topics data as a prop to the child */ }
      <TopicList topics={props.topics}/> 
      <FavBadge />

    </div>
  )
};

export default TopNavigationBar;
