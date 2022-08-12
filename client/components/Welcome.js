import React from 'react';
import {connect} from 'react-redux'

class Welcome extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Welcome {this.props.user.name}</h1>
            </div>
        )
    }
}

const mapStateToProps = (user)=>{
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Welcome);