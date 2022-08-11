import React from "react";
import { connect } from "react-redux";

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
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(Login);