const HackerNewsStories = ({ stories = [] }) => {
  return (
    <div className="stories-wrapper">
      {stories &&
        stories.map(
          ({ _id, title }) =>
            title &&
            url && (
              <div className="stories-list" key={_id}>
                <h3>
                  <a>{title}</a>
                </h3>
              </div>
            )
        )}
    </div>
  );
};

export default HackerNewsStories;
