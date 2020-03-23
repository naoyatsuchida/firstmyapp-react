import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route,Switch} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
        <Route exact path='/' exact component={App}/>
        <Route path='./rogin/Signup' exact component={Signup}/>
        <Route path='./rogin/Signin' exact component={Signin}/>
      </Switch>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
