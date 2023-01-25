import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";

function ReactRouter4() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <h1>React Router</h1>
      <h2>Login:true</h2>
      <button onClick={() => setLogin(true)}>login</button>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/secret"}>Secret</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/secret">
            <Secret secretProps={login} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path={"/login"}>
            <Login />
          </Route>

          <Route path={"/product/:id"}>
            <Product />
          </Route> 
          <Route path={"*"}><ErrPage/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default ReactRouter4;

function Home() {
  const [saveData, setSaveData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => setSaveData(data.products));
  }, []);
  return (
    <>
      {" "}
      <div>Home</div>
      {saveData?.map((eachelement) => (
        <h1>
          <Link to={`/product/${eachelement.id}`}>{eachelement.id}</Link>
        </h1>
      ))}
    </>
  );
}

function Secret({ secretProps }) {
  return (
    <>
      {secretProps ? <h1>Secret</h1> : <Redirect to={{ pathname: "/login" }} />}
    </>
  );
}

function Contact() {
  return <h1>Contact</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

function Product() {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => response.json())

      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <img src={product.thumbnail}/>
      <p>{product.price}</p>
      <p>{product.title}</p>
      <p>{product.brand}</p>
    </div>
  )
}
 

function ErrPage(){
    return(<div>
        404
    </div>)
}