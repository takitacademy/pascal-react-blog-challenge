import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./headerTop/Header";
import Home from "./pages/home/Home";
import SinglePost from "./pages/singlePost/SinglePost";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/singlepost">
          <SinglePost />
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
