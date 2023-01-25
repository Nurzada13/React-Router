
import "./App.css"

import { BrowserRouter, Switch , Route} from "react-router-dom"
import Header from "./component2/Header" 

import "bootstrap/dist/css/bootstrap.min.css";
import ArticleList from "./component2/Article-list"

import Home from "./component2/Home"
import AboutPage from "./component2/AboutPage"
import ContactUs from "./component2/Contact-Us"


import ArticleContent from "./component2/Article-content"
function App(){

return(
  <BrowserRouter> 
  <Header/>
  <Switch>
<Route path="/"exact  component={Home}/>

<Route path="/about" exact component={AboutPage}/>
<Route path="/articleList" exact component={ArticleList}/> 
<Route path="/contactUs" exact component={ContactUs}/>

<Route path="/article/:name" exact component={ArticleContent}/>

  </Switch>
  </BrowserRouter>
)

} 
export default App