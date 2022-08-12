import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {signupThunk} from '../redux/auth'


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { name, email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
        <h3>SignUp</h3>
          <label htmlFor="name"> Name </label>
          <input name="name" type="text" onChange={handleChange} value={name} />
          <label htmlFor="email"> Email </label>
          <input
            name="email"
            type="text"
            onChange={handleChange}
            value={email}
          />
          <label htmlFor="password"> Password </label>
          <input
            name="password"
            type="text"
            onChange={handleChange}
            value={password}
          />
          <button type="submit">Sign Up!</button>
          <p>Already have an account? Click to <Link to='/login'>Login</Link></p>
        </form>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signupThunk(user))
});

export default connect(null, mapDispatchToProps)(SignUp);