import React from "react";
import {Route, IndexRoute, Router, browserHistory} from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import Concerns from "../components/common/Concerns";
import Why from "../components/common/Why";
import AboutUs from "../components/common/aboutus";


import SubmitStory from "../components/common/SubmitStory";
import LogIn from "../components/common/LogIn";
import LogInBox from "../components/common/LogInBox";


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="favorites" component={Favorites}/>
      <Route path="submitstory" component={SubmitStory}/>
      <Route path="concerns" component={Concerns}/>
      <Route path="why" component={Why}/>
      <Route path="aboutus" component={AboutUs}/>
      <Route path="login" component={LogIn}/>
      <Route path="loginbox" component={LogInBox}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);

export default routes;
