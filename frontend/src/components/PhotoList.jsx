import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

// Receive photos as a prop from the parent HomeRoute
const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {/* map over photos array and send data as a prop to the child PhotoListItem */ }
      {props.photos.map((item, index) => {
        return (
          <PhotoListItem key={item.id} data={item} likedPhotos={props.likedPhotos} dispatch={props.dispatch} />
        )
      })}

    </ul>
  );
};

export default PhotoList;
