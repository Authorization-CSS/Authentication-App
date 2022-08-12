import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import FourOhFour from './FourOhFour';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/signup' component={SignUp}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route path='/' component={Login}></Route>
                <Route exact path='*' component={FourOhFour}></Route>
                </Switch>
        </Router>
    )
}

export default Routes;