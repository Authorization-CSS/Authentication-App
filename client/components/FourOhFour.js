import React from 'react';
import {Link} from 'react-router-dom';

class FourOhFour extends React.Component {
    render(){
        return(
            <div className="poop">
                <div className="face">
	<div className="band">
		<div className="red"></div>
		<div className="white"></div>
		<div className="blue"></div>
	</div>
	<div className="eyes"></div>
	<div className="dimples"></div>
	<div className="mouth"></div>
</div>
<h1>Oops! Something went wrong!</h1>
<Link to='/'>
<div class="btn">Return to Home</div>
</Link>
            </div>
        )
    }
}

export default FourOhFour;