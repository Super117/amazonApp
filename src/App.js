import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
