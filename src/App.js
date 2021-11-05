import './App.scss';


import {Route,BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "~/components/login/login";
import Signup from "~/components/signup/signup";
import subsystem from "~/components/subsystem/subsystem";

function App() {
 

  return (
    <div className='App'>
        <Router>
            <Switch>
                <Route path="/login"  component={Login}/>
                <Route path="/signup"  component={Signup}/>
                <Route path="/sub"  component={subsystem}/>
            </Switch>
        </Router>
    </div>

  );

}

export default App;