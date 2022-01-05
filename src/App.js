import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Blog from "./Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Banner />
          </Route>
          <Route path="/blog">
            <Banner text="Blog" />
            <Blog />
          </Route>
          <Route path="/trending">
            <Banner text="Trending Blogs" />
            <Blog />
          </Route>
          <Route path="/news">
            <Banner text="News &amp; Updates" />
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
