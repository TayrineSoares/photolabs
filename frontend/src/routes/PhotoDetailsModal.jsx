import { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';



const PhotoDetailsModal = (props) => {
  const { toggleModal, selectedPhoto, likedPhotos, dispatch } = props;

  if (!selectedPhoto) return null; // Avoid rendering if no photo is selected

  // Handler to close modal when clicking outside
  const handleOutsideClick = (event) => {
    const modalContent = document.querySelector('.photo-details-modal');
    
    // If the click was outside the modal content, close the modal
    if (event.target && !modalContent.contains(event.target)) {
      toggleModal(); // Close modal
    }
  };

  // Add event listener to detect outside clicks when the modal is rendered
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listener when component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  

  // converts similarPhotos object into an array
  const similarPhotos = Object.values(selectedPhoto.similar_photos);

  return (
    <div className="photo-details-modal"  >

      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    
      <div className='photo-details-modal__images'>
        <PhotoFavButton likedPhotos={likedPhotos} dispatch={dispatch} photoId={selectedPhoto.id}/>

        <img 
        className="photo-details-modal__image"
        src={selectedPhoto.urls.full}
        alt={`Photo ${selectedPhoto.id} by ${selectedPhoto.user.username}`}
        />
        <div className="photo-details-modal__top-bar">
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
      </div>
      
        {/* Display similar photos */}
        <h3>Similar Photos</h3>
        <PhotoList photos={similarPhotos} toggleModal={toggleModal} likedPhotos={likedPhotos} dispatch={dispatch}/>
      </div>
    </div>

  )
};

export default PhotoDetailsModal;