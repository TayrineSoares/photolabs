import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';
import PhotoList from '../components/PhotoList';


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
      
      <div className="photo-details-modal__image">
        {/* Use PhotoListItem to display the selected photo */}
        <PhotoListItem 
          photo={selectedPhoto} 
          likedPhotos={likedPhotos}
          dispatch={dispatch} 
          toggleModal={toggleModal} 
        /> 
      </div>

      {/* Display similar photos */}
      <div className="photo-details-modal__images"> 
        <PhotoList photos={similarPhotos} toggleModal={toggleModal}/>

      </div>

    </div>
  )
};

export default PhotoDetailsModal;

