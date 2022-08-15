import React from 'react';
import {Link} from 'react-router-dom';

class BadCreds extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Sorry, bad credentials! click <Link to='/login'>Here</Link> to try again!</h1>
            </div>
        )
    }
}

export default BadCreds;