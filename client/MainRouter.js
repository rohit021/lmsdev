import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Signin from "./pages/auth-pages/login";
import Signup from "./pages/auth-pages/register";
import PrivateRoute from './components/routing/PrivateRoute'

const MainRouter = () => {
    return (<div>
      {/* <TopNavbar/> */}
      <Switch>
        {/* <PrivateRoute  exact path="/" component={Home}/> */}
        <Route path="/register" component={Signup}/>
        <Route path="/login" component={Signin}/>        
      </Switch>
    </div>)
}

export default MainRouter