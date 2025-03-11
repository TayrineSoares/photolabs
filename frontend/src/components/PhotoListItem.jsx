import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  // data come as a prop from the parent PhotoList
  const { photo, likedPhotos, dispatch, toggleModal } = props;
  console.log("PHOTO LIST ITEM", photo);

  return (
    <div>
      <div className="photo-list__item" > 
        <PhotoFavButton 
        photoId={photo.id}
        likedPhotos={likedPhotos}
        dispatch={dispatch}
        />

        <img 
          className='photo-list__image' 
          src={photo.urls.regular}
          alt={`Photo ${photo.id} by ${photo.user.username}`}
          onClick={() => toggleModal(photo)} // calls the toggleModal that comes from App
          
        />

        <div className="photo-list__user-details">

          <img 
            className="photo-list__user-profile" 
            src={photo.user.profile} 
            alt={`Profile Picture of ${photo.user.username}`}
          />
        
          <div className="photo-list__user-info">
            <p> {photo.user.name} </p>
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
