import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';


const PhotoDetailsModal = (props) => {
  const { toggleModal, photos } = props;

  return (
    <div className="photo-details-modal">
      {console.log(photos.id)}
      {console.log(photos.id)}

      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;

