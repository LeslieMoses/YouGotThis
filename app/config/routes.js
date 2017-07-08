import React from "react";
import {Route, IndexRoute, Router, browserHistory} from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import Concerns from "../components/common/Concerns";
import itWillChange from "../components/common/itWillChange";
import youAreEnough from "../components/common/youAreEnough";
import seeWhatISee from "../components/common/seeWhatISee";
import iUnderstand from "../components/common/iunderstand";
import makeADifference from "../components/common/makeADifference";
import youAreUnique from "../components/common/youAreUnique";

import Why from "../components/common/Why";
import AboutUs from "../components/common/aboutus";

import SubmitStory from "../components/common/SubmitStory";
import SubmitModal from "../components/common/SubmitModal";
import LogIn from "../components/common/LogIn";
import LogInBox from "../components/common/LogInBox";


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="favorites" component={Favorites}/>
      <Route path="submitstory" component={SubmitStory}/>
      <Route path="submitmodal" component={SubmitModal}/>

      <Route path="concerns" component={Concerns}/>
      <Route path="itwillchange" component={itWillChange}/>
      <Route path="youareenough" component={youAreEnough}/>
      <Route path="seewhatisee" component={seeWhatISee}/> 
      <Route path="iunderstand" component={iUnderstand}/>
      <Route path="makeadifference" component={makeADifference}/>
      <Route path="youareunique" component={youAreUnique}/>

      
       
      <Route path="why" component={Why}/>
      <Route path="aboutus" component={AboutUs}/>
      <Route path="login" component={LogIn}/>
      <Route path="loginbox" component={LogInBox}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);

export default routes;
