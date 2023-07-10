import "./App.css";
import PostCard from "./components/PostCard";
import IPost from "./interfaces/IPost";
import { useEffect } from "react";

const posts: IPost[] = [
  {
    title: "first post",
    text: "some content",
    time: new Date().toString(),
    published: false,
    _id: "1",
  },
  {
    title: "second post",
    text: `Butterflies, with their captivating colors and graceful flight, have long fascinated humans throughout history. These delicate creatures symbolize transformation, beauty, and the ephemeral nature of life. In this blog post, we will embark on a journey into the enchanting world of butterflies, exploring their remarkable life cycle, unique adaptations, and the vital role they play in our ecosystems.

    The Butterfly Life Cycle: A Tale of Metamorphosis
    
    The life cycle of a butterfly is an awe-inspiring process of metamorphosis. It begins when a female butterfly lays her eggs on specific host plants, which will serve as a food source for the caterpillars. These tiny, often unnoticed eggs hatch into larvae, commonly known as caterpillars. The caterpillar stage is marked by voracious feeding, as these creatures munch on leaves, growing rapidly and shedding their skin several times.
    
    After a period of growth, the caterpillar forms a chrysalis or pupa, undergoing a remarkable transformation within its protective casing. Inside, the caterpillar's body liquefies, and from this soupy substance, a butterfly begins to emerge. Finally, the adult butterfly emerges from the chrysalis, unfolding its wings and preparing to embark on its short but spectacular lifespan.`,
    time: new Date().toString(),
    published: false,
    _id: "2",
  },
  {
    title: "third post",
    text: "some content",
    time: new Date().toString(),
    published: false,
    _id: "3",
  },
];

const App: React.FC = () => {
  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts");
      const postss = await response.json() as IPost[];
      console.log(postss);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>My New Blog</h1>
      <div className="postsList">
        {posts.map((post) => (
          <PostCard
            title={post.title}
            text={post.text}
            key={post._id}
            published={post.published}
            time={post.time}
            _id={post._id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
