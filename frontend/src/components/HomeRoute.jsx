import '../styles/HomeRoute.scss';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = () => {
  return (
    <div className='home-route'>
      <TopNavigationBar />
      <div className='photo-list' >
        <PhotoList />
      </div>
    </div>
  )
};

export default HomeRoute;
