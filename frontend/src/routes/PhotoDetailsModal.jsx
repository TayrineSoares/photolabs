import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';
import PhotoList from '../components/PhotoList';


const PhotoDetailsModal = (props) => {
  const { toggleModal, selectedPhoto, photos } = props;

  //console.log("Selected Photo Data:", photo); // Log received data

  if (!selectedPhoto) return null; // Avoid rendering if no photo is selected

  // Find similar photos (same topic, but exclude the selected photo)
  const similarPhotos = photos.filter((photo) => 
    photo.id !== selectedPhoto.id && photo.topic === selectedPhoto.topic
  );


  return (
    <div className="photo-details-modal">
      
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className="photo-details-modal__image">
        
        {/* Use PhotoListItem to display the selected photo */}
        <PhotoListItem 
          photo={selectedPhoto} 
          likedPhotos={[]} // Pass empty array for now
          dispatch={() => {}} // Placeholder function
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

