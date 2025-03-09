import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  const { data } = props;

  return (
    <div>
      <h1>This is my PhotoListItem</h1>
    
      <img 
        className='photo-image' 
        src={data.urls.regular}
        alt={`Photo by ${data.username}`} 
      />

      <img 
        className='photo-profile' 
        src={data.user.profile} 
        alt={`Profile Picture of ${data.username}`}
      />
      
      <p> {data.user.name} </p>

      <p> {data.location.city} , {data.location.country} </p>
      
    </div>
  )

};

export default PhotoListItem;
