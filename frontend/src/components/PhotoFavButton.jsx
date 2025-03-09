// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';


const PhotoFavButton = (props) => {

  {/* photoId come as a prop from the parent PhotoListItem*/ }
  const { photoId } = props;

  const [isFavourite, setisFavourite] = useState (false);

  const handleClick = () => {
    setisFavourite(prevState => !prevState);
  }
  

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}> 

      {/* if isFavourite = true, adds class favourited. If false, no class is added */}
      <div className={`photo-list__fav-icon-svg ${isFavourite ? 'favourited' : ''}`}>

        {/* if isFavourite = true, red heart. If false, white heart */}
        {isFavourite ? '❤️' : '🤍'}

      </div>
    </div>
  );
};

export default PhotoFavButton;
