import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  {/* data come as a prop from the parent PhotoList */ }
  const { data } = props;

  return (
    <div>
      <div className="photo-list__item"> 
        <PhotoFavButton photoId={data.id}/>

        <img 
          className='photo-list__image' 
          src={data.urls.regular}
          alt={`Photo ${data.id} by ${data.user.username}`}
          
        />
        

        <div className="photo-list__user-details">

          <img 
            className="photo-list__user-profile" 
            src={data.user.profile} 
            alt={`Profile Picture of ${data.user.username}`}
          />
        
          <div className="photo-list__user-info">
            <p> {data.user.name} </p>
            <div className="photo-list__user-location">
              <p> {data.location.city} , {data.location.country} </p>
            </div>
            
          </div>

          
        </div>
        
      </div>
    </div>
  )

};

export default PhotoListItem;
