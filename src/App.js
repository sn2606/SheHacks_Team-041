import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './Components/Landing';
import Landing from './Components/Landing';
import Desk from './Components/Desk';
import FileUpload from './Components/FileUpload';
import Personal from './Components/Personal';
import PersonalDrawer from './Components/PersonalDrawer';
import Midway from './Components/Midway';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Landing} />
          <Route path="/desk" exact component={Desk} />
          <Route path="/upload" exact component={FileUpload} />
          <Route path="/mid-way" exact component={Midway} />
          <Route path="/personalupload" exact component={Personal} />
          <Route path="/personaldrawer" exact component={PersonalDrawer} />

        </div>
      </Switch>
    </Router>
  );
}

export default App;

