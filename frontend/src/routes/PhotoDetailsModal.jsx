import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';


const PhotoDetailsModal = (props) => {
  const { toggleModal, selectedPhoto } = props;

  //console.log("Selected Photo Data:", photo); // Log received data

  if (!selectedPhoto) return null; // Avoid rendering if no photo is selected

  return (
    <div className="photo-details-modal">
      
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <p>By: {selectedPhoto.user.name}</p>
      <img src={selectedPhoto.urls.full} />
    </div>
  )
};

export default PhotoDetailsModal;

