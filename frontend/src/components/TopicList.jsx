import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// array of objects means we can map over 
// and send data as a prop to the child TopicListItem
const sampleDataForTopicList = [
  {
    id: 1,
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: 2,
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: 3,
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">

      {/* map over and send data as a prop to the child TopicListItem */ }
      {sampleDataForTopicList.map((item, index) => {
        return (
          <TopicListItem key={item.id} title={item.title}  />
        )
      })}
    
    </div>
  );
};

export default TopicList;
