import { Link } from "react-router-dom";
import articles from "./Articles";

function ArticleList() {
  return (
    <>
      <h1>Articlelist</h1>
      {articles.map((articles, index) => (
        <div key={index}>
          <Link to={`/article/${articles.name}`}>
            <h2>{articles.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
export default ArticleList;
