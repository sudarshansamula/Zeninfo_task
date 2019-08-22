import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Userpanel from './Userpanel/usertable';
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom'
const routing = (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Userpanel} />
        </Switch>
      </div>
    </Router>
)
console.log(Userpanel)
ReactDOM.render(Userpanel, document.getElementById('root'))

