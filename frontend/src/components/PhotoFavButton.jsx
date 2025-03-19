import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = (props) => {

  const { photoId, likedPhotos = [], dispatch } = props;
  const isFavourite = likedPhotos.includes(photoId);

  const handleFavouriteClick = () => {
    dispatch(photoId);
  }
  
  return (
    <div className="photo-list__fav-icon" onClick={handleFavouriteClick}> 

      <FavIcon selected={isFavourite} />

    </div>
  );
};

export default PhotoFavButton;
