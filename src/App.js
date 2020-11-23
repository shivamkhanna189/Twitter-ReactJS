import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import React from "react"
import SignIn from "./components/Login/login.component";
import SignUp from "./components/sign-up/signup.component"; 
import Footer from "./components/footer/footer.component"
import ForgotPassword from "./components/forgot-password/forgot-password.component"
import ResetPassword from './components/reset-password/reset-password.component';

function App() {
  return (
    <div className="App">
      <Switch>
          <Redirect exact from='/' to='/login' />

          <Route  path="/login" component ={SignIn}></Route>
              <Route path="/register" component = {SignUp}></Route>
              <Route  path="/home" component={Home}></Route>
              <Route path="/about" component = {About}></Route>
              <Route path="/forgot" component = {ForgotPassword}></Route>
              <Route path ="/reset" component = {ResetPassword} ></Route>
              
          <Route path='/404' component={NotFound} />
          <Redirect exact from='*' to='/404' />
      </Switch>
      <Footer />

   
    </div>
  );
}

export default App;

class Home extends React.Component {
  render() {
     return (
        <div>
           <h1>Home...</h1>
        </div>
     )
  }
}

class About extends React.Component{
  render(){
    return (
    <div>
      <h1> About ....</h1>
    </div>)
  }
}


const NotFound = () =>
  <div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>

 



