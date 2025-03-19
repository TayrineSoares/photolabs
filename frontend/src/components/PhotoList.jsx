import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, likedPhotos, dispatch, toggleModal} = props;
  
  return (
    <ul className="photo-list">
      {/* map over photos array and send data as a prop to the child PhotoListItem */ }
      {photos.map((photo) => {
        return (
          <PhotoListItem key={photo.id} photo={photo} likedPhotos={likedPhotos} dispatch={dispatch} toggleModal={toggleModal} />
        )
      })}

    </ul>
  );
};

export default PhotoList;