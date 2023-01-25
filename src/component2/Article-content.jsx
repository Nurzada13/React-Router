import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import articles from "./Articles";



function ArticleContent() {
  const paramsHook = useParams(); 

  const historyHook = useHistory();

  const myArticle = articles.filter(
    (articles) => articles.name === paramsHook.name
  ); 
  console.log(myArticle,articles,paramsHook);
  return (
    <div>
      {myArticle.length ? (
        <>
          <Link to="/">Go Home</Link>

          <h2>{myArticle[0].title}</h2>
          <p>{myArticle[0].content}</p>
          <button onClick={() => historyHook.goBack(-2)}>Back</button>
        </>
      ) : (
        <h1>nothing found</h1>
      )}
    </div>
  );
}

export default ArticleContent;
