import React from "react";
import { connect } from "react-redux";

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
  }

  render() {
    const { name, email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(null, mapDispatchToProps)(SignUp);