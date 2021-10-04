import "./App.css"
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./container/header";
import ProductDetail from "./container/productDetail";
import ProductListing from "./container/productList";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={ProductListing}/>
      <Route path="/product/:productId" exact component={ProductDetail}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
