// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
import { useState } from 'react';


const PhotoFavButton = (props) => {

  {/* photoId come as a prop from the parent PhotoListItem*/ }
  const { photoId } = props;

  const [isFavourite, setisFavourite] = useState (false);


  const handleClick = () => {
    // Toggle the favourite state
    setisFavourite(prevState => !prevState);
  }
  

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}> 

      {/* Pass the selected state to FavIcon component */}
      <FavIcon selected={isFavourite}  />

    </div>
  );
};

export default PhotoFavButton;
