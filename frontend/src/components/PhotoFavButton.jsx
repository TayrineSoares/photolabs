// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';


const PhotoFavButton = () => {

  const [like, setLike] = useState (false);

  const handleClick = () => {
    !like ? setLike(true) : setLike(false);
    console.log(like);
  }


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}> 
    
      <div className="photo-list__fav-icon-svg">

      </div>
    </div>
  );
};

export default PhotoFavButton;
