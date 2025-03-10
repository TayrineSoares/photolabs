import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: 1,
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  {/* data come as a prop from the parent TopicList */ }
  const { title } = props; 
  
  return (
    <div className="topic-list__item">
  
      <ul> {title} </ul>

    </div>
  );
};

export default TopicListItem;


