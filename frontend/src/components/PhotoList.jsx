import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

// Receive photos as a prop from the parent HomeRoute
const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
      {/* map over photos array and send data as a prop to the child PhotoListItem */ }
      {photos.map((item, index) => {
        return (
          <PhotoListItem key={item.id} data={item} />
        )
      })}

    </ul>
  );
};

export default PhotoList;
