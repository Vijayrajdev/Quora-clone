import { useEffect, useState } from "react";
import db from "../pages/firebase";
import FeedBox from "./FeedBox";
import Post from "./Post";
import "core-js";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="pt-6 pb-36 w-1/2 h-screen overflow-y-scroll scrollbar-hide">
      <FeedBox />
      {posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          userQuestion={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.user}
          photo={questions.user.photo}
          quorauser={questions.user}
          username={questions.user.displayName}
          usermail={questions.user.email}
        />
      ))}
    </div>
  );
};

export default Feed;
