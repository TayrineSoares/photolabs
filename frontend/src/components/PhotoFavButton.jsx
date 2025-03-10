import '../styles/PhotoFavButton.scss';

// import FavIcon from './FavIcon';
import FavIcon from './FavIcon';

const PhotoFavButton = (props) => {

  const { photoId, likedPhotos, dispatch } = props;

  const isFavourite = likedPhotos.includes(photoId);

  const handleClick = () => {
    dispatch(photoId); // Toggle photo in global state
  }
  
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}> 

      {/* Pass the selected (isFavourite) state to FavIcon component as prop */}
      <FavIcon selected={isFavourite} />

    </div>
  );
};

export default PhotoFavButton;
