import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  return (
    <div className='fav-badge'>
      {/* displayAlert={likedPhotos.length > 0}: This will pass true to displayAlert in the FavIcon component */}
      <FavIcon displayAlert={props.likedPhotos.length > 0} selected={true} />
    </div>
  ) 
};

export default FavBadge;

