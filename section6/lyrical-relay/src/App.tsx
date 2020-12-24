import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Template from "./components/Template";
import SongList from "./components/SongList";

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          1321
          <Route path="/" component={SongList} />
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
