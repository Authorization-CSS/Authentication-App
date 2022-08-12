import React from 'react';
import Login from './Login';
import Welcome from './Welcome';
import axios from 'axios';

class App extends React.Component{
    constructor(){
      super();
      this.state = {
        auth: {}
      };
      this.signIn = this.signIn.bind(this);
      this.logout = this.logout.bind(this);
    }
    logout(){
      window.localStorage.removeItem('token');
      this.setState({ auth: {}});
    }
    async attemptTokenLogin(){
      const token = window.localStorage.getItem('token');
      if(token){
        const response = await axios.get('/api/auth', {
          headers: {
            authorization: token
          }
        });
        this.setState({ auth: response.data });
      }
      console.log("NO FUCKING TOKEN");
    }
    componentDidMount(){
      //this.attemptTokenLogin();
    }
    async signIn(credentials){
        console.log("INSIDE AXIOS CALL", credentials);
      const response = await axios.post('/api/auth', credentials);
      const { token } = response.data;
      console.log('AFTER AXIOS CALL', token);
      window.localStorage.setItem('token', token);
      this.attemptTokenLogin();
    }
    render(){
      const { auth } = this.state;
      const { signIn, logout } = this;
      if(!auth.id){
        return <Login login={ signIn }/>
      }
      else {
        return (
          <Welcome user={auth}/>
        );
      }
    }
  }

  export default App;