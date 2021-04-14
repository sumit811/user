import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Select from './components/Select';
import NotFound from './components/NotFound';
import Create from './components/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
                <Select />
            </Route>
            <Route  path="/Create">
              <Create />
          </Route>
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
