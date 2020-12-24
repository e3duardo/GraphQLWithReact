import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Template from "./components/Template";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";
import SongCreate from "./components/SongCreate";

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/" exact component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:id" component={SongDetail} />
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
