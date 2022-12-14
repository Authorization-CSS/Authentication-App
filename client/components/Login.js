import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {loginThunk} from '../redux/auth'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
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
    this.props.login(this.state)
  }

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
        <h3>Login</h3>
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
          <button type="submit">Submit</button>
          <p>Need to Register? Click to <Link to='/signup'>Sign Up</Link></p>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   login: user => dispatch(loginThunk(user))
// });

export default Login;