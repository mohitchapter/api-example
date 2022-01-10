import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Blog from "./Blog";
import BlogDetail from "./Blog/BlogDetail";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
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
          <Route path="/blog-detail/:id">
            <BlogDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
