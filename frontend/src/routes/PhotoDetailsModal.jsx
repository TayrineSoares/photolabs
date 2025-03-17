import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  const { toggleModal, selectedPhoto, likedPhotos, dispatch } = props;

  if (!selectedPhoto) return null; // Avoid rendering if no photo is selected


  // converts similarPhotos object into an array
  const similarPhotos = Object.values(selectedPhoto.similar_photos);

  return (
    
    <div className="photo-details-modal">
      
      
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    
      <div className='photo-details-modal__images'>
        <PhotoFavButton likedPhotos={likedPhotos} dispatch={dispatch} photoId={selectedPhoto.id}/>

        <img 
        className="photo-details-modal__image"
        src={selectedPhoto.urls.regular}
        alt={`Photo ${selectedPhoto.id} by ${selectedPhoto.user.username}`}
        />
      
        <div className="photo-details-modal__photographer-details">
          <img 
            className="photo-details-modal__photographer-profile" 
            src={selectedPhoto.user.profile} 
            alt={`Profile Picture of ${selectedPhoto.user.username}`}
          />

          <div className="photo-details-modal__photographer-info">
            <p> {selectedPhoto.user.name}, @{selectedPhoto.user.username} </p>
            <div className="photo-details-modal__photographer-location">
              <p> {selectedPhoto.location.city} , {selectedPhoto.location.country} </p>
            </div>
          </div>
        </div>
      
        {/* Display similar photos */}
        <h3>Similar Photos</h3>
        <PhotoList photos={similarPhotos} toggleModal={toggleModal}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;