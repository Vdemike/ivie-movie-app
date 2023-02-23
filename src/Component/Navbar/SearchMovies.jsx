import { useState, useEffect } from "react";
import HackerNewsStories from "./Movies";
import Searchbar from "./Searchbar";

const HackerNewsStoriesWithSearch = () => {
  const [stories, setStories] = useState([]);
  const [allStories, setAllStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");

  const fetchStories = async () => {
    try {
      const data = await (await fetch("http://localhost:3000/movies")).json();
      console.log(data);
      const stortedStories = data.title;
      setAllStories(stortedStories);
      setStories(stortedStories);
      setError(null);
    } catch (err) {
      setError(err.message);
      setStories(null);
    } finally {
      setLoading(false);
    }
  };

  const updateKeyword = (keyword) => {
    console.log(allStories);
    const filtered = allStories.filter((story) => {
      return `${story.title.toLowerCase()}`.includes(keyword.toLowerCase());
    });
    setKeyword(keyword);
    setStories(filtered);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <>
      {" "}
      {/* React fragment */}
      <div className="wrapper">
        <h2>Latest HN Stories</h2>
        {loading && <div>HackerNews frontpage stories loading...</div>}
        {error && (
          <div>{`Problem fetching the HackeNews Stories - ${error}`}</div>
        )}
        <Searchbar keyword={keyword} onChange={updateKeyword} />
        <HackerNewsStories stories={stories} />
      </div>
    </>
  );
};

export default HackerNewsStoriesWithSearch;
