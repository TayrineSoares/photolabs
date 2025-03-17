import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

// Receive  data from the parent HomeRoute
const TopNavigationBar = (props) => {
  {/* if the length of array likedPhotos is > 0, that means at least 1 photo has been favourited, so isFavPhotoExist will be true. */ }
  const isFavPhotoExist = props.likedPhotos.length > 0;
  //console.log(isFavPhotoExist);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs </span>
      {/*send data as a prop to the child */ }
      <TopicList setSelectedTopic={props.setSelectedTopic} topics={props.topics} /> 
      <FavBadge isFavPhotoExist={isFavPhotoExist} />

    </div>
  )
};

export default TopNavigationBar;

