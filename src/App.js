import { Router, Route } from 'react-router-dom';

import Movies from './components/Movies';
import DetailDiscription from './components/DetailDiscription';
import Navigator from './Navigator';
import history from './History';

function App(props) {

  return (
    <div>

      <Router history={history}>
        <Navigator />
        <Route exact path="/" component={Movies} />
        <Route exact path="/Movies" component={Movies} />
        <Route path="/TVshows" component={Movies} />
        <Route path="/movie/:id" component={DetailDiscription} />
        <Route path="/tv/:id" component={DetailDiscription} />
        
       </Router>
    </div>
  )
}

export default App;
