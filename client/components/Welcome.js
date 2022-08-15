import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Welcome extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};
    }
    handleSubmit(){
    window.localStorage.removeItem('token');
    this.setState({ auth: {}});
    }
    componentDidMount(){
        console.log(this);
        this.setState({auth: this.props.user})
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Welcome {this.props.user.name}</h1>
                <button onClick={this.handleSubmit} type='submit' action='/login'>Log Out</button>
            </div>
        )
    }
}



export default Welcome;