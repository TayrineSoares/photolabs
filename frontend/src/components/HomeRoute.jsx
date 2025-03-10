import '../styles/HomeRoute.scss';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';

// receive photos and topics data from parent App
const HomeRoute = ({photos, topics}) => {
  return (
    <div className='home-route'>

      {/*send topics data as a prop to the child */ }
      <TopNavigationBar topics={topics}/>
      <div className='photo-list' >
        {/*send photos data as a prop to the childs */ }
        <PhotoList photos={photos}/>
      </div>
    </div>
  )
};

export default HomeRoute;
