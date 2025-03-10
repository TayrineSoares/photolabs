import '../styles/PhotoFavButton.scss';

// import FavIcon from './FavIcon';
import FavIcon from './FavIcon';
import { useState } from 'react';


const PhotoFavButton = (props) => {

  {/* photoId come as a prop from the parent PhotoListItem*/ }
  {/* we are not using it yet but may be useful later when each photo has an unique Id */ }
  const { photoId } = props;

  const [isFavourite, setisFavourite] = useState (false);

  const handleClick = () => {
    setisFavourite(prevState => !prevState);
  }
  

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}> 

      {/* Pass the selected (isFavourite) state to FavIcon component as prop */}
      <FavIcon selected={isFavourite} />

    </div>
  );
};

export default PhotoFavButton;
