import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

const usePosts = () => {
  return useContext(PostsContext);
};

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: "titre1", body: "body1" },
    { id: 2, title: "titre2", body: "body2" },
  ]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default usePosts;
