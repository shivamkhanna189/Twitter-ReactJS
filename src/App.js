import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import React from "react"

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact  render ={()=>{
              return (<Redirect to="login"></Redirect>)
          }}></Route>
        
          <Route  path="/login" component ={Login}></Route>
          <Route  path="/home" component={Home}></Route>
          <Route path="/about" component = {About}></Route>
          <Route  path="*" component = {NotFound}></Route> // Not found page
      </Switch>
   
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

class Login extends React.Component{
  render(){
    return (
    <div>
      <h1> Login ....</h1>
    </div>)
  }
}

const NotFound = () =>
  <div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>

 



