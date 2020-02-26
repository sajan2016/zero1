import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import HOME from './containers/HOME/HOME';
import LOGIN from './components/LOGIN/LOGIN';
import SIGNUP from './components/SIGNUP/SIGNUP';

class App extends Component{
  render(){
    return (
        <Switch>
        <Route path="/login" component={LOGIN}/>
        <Route path="/signup" component={SIGNUP}/>
        <Route path="/" exact component={HOME}/>
        </Switch>        
    );
  }
}


export default App;
