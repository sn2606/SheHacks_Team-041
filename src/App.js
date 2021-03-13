import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './Components/Landing';
import Landing from './Components/Landing';
import Desk from './Components/Desk';
import FileUpload from './Components/FileUpload';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Desk} />
          <Route path="/upload" exact component={FileUpload} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;

