import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// Receive topics data from the parent TopNavigationBar
const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">

      {/* map over topics array and send data as a prop to the child TopicListItem */ }
      {topics.map((item, index) => {
        return (
          <TopicListItem key={item.id} title={item.title}  />
        )
      })}
    
    </div>
  );
};

export default TopicList;
