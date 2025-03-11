import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';


const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.toggleModal}/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;

