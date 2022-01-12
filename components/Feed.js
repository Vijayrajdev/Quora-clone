import FeedBox from "./FeedBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="pt-6 pb-36 w-1/2 h-screen overflow-y-scroll scrollbar-hide">
      <FeedBox />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
