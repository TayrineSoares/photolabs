import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";

const PhotoList = () => {
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
