import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { photo, likedPhotos, dispatch, toggleModal } = props;

  return (
    <div>
      <div className="photo-list__item" > 
        <PhotoFavButton 
        photoId={photo.id}
        likedPhotos={likedPhotos}
        dispatch={dispatch}
        />

        {/* When image is clicked the toggleModal is trigered*/}
        <img 
          className='photo-list__image' 
          src={photo.urls.regular}
          alt={`Photo ${photo.id} by ${photo.user.username}`}
          onClick={() => toggleModal(photo)} 
        />

        <div className="photo-list__user-details">

          <img 
            className="photo-list__user-profile" 
            src={photo.user.profile} 
            alt={`Profile Picture of ${photo.user.username}`}
          />
        
          <div className="photo-list__user-info">
            <p> {photo.user.name}, @{photo.user.username}  </p>
            <div className="photo-list__user-location">
              <p> {photo.location.city} , {photo.location.country} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;