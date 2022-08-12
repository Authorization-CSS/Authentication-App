import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import FourOhFour from './FourOhFour';
import App from './App';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/signup' component={SignUp}></Route>
                <Route exact path='/login' component={App}></Route>
                <Route path='/' component={App}></Route>
                <Route exact path='*' component={FourOhFour}></Route>
                </Switch>
        </Router>
    )
}

export default Routes;