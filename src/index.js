import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Signin from './components/rogin/Signin'
import Signup from './components/rogin/Signup'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
        <Route exact path='/'  component={App}/>
        <Route path='../rogin/Signup' component={Signup}/>
        <Route path='../rogin/Signin'  component={Signin}/>
      </Switch>
 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
