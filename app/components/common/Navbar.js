import React from "react";
import {Link} from "react-router";
import SubmitModal from "./SubmitModal";
import itWillChange from "./itWillChange";

import youAreEnough from "./youAreEnough";

import borrowView from "./borrowView";

import iUnderstand from "./iUnderstand";
import makeADifference from "./makeADifference";

import youAreUnique from "./youAreUnique";
import QuoteForm from "./QuoteForm"; 
var FontAwesome = require('react-fontawesome');

import {
  Nav,
  NavItem,
  Brand,
  NavDropdown,
  MenuItem,
  Button,
  Header,
  Collaspe,
  Navbar,
  Toggle
} from 'react-bootstrap';

const Navigation = () => (
  <Navbar collapseOnSelect>

    <Navbar.Collapse>
                <Navbar.Brand pullLeft>
            <Link to="/" className="navHed">You Got This</Link>
          </Navbar.Brand>
      <Nav>
        <Navbar.Header>


          <Navbar.Toggle/>
        </Navbar.Header>

  {/* START try 081817      */}
        <div className="responsive-nav-social-mobile" data-responsive-toggle="responsive-nav-social" data-hide-for="medium">
          <div className="responsive-nav-social-mobile-left">
            <ul className="menu">
              <li><a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              <li><a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p" aria-hidden="true" /></a></li>
              <li><a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
            </ul>
          </div>
          <div className="responsive-nav-social-mobile-right">
            <button className="menu-icon" type="button" data-toggle="responsive-nav-social" />
          </div>
        </div>
        <div data-sticky-container>
          <div className="responsive-nav-social" id="responsive-nav-social" data-sticky data-options="marginTop:0;">
            <div className="row align-justify align-middle" id="responsive-menu">
              <div className="responsive-nav-social-left">
                <ul className="menu vertical medium-horizontal">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Travel</a></li>
                  <li><a href="#">Eat</a></li>
                  <li><a href="#">Relax</a></li>
                  <li><a href="#">Videos</a></li>
                </ul>
              </div>
              <div className="responsive-nav-social-right hide-for-small-only">
                <ul className="menu">
                  <li><a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p" aria-hidden="true" /></a></li>
                  <li><a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
{/* END try 081817*/}




        <ul className="nav navbar-nav">
          {/*className={location.pathname === "/" && "active"}*/}
          {/*<li >
            <Link to="/">Home</Link>
          </li>*/}
          {/*<li className={location.pathname === "/profile" && "active"}>
                   <Link to="/profile">Profile</Link>
          </li>*/}
          {/*className={location.pathname === "/submitstory" && "active"}*/}
            <NavItem eventKey={1}><li >
            {/*change Fav to Profile*/}
            
          
            {/*<Link to="/submitstory"></></Link>*/}

           
          </li>  </NavItem>
    
        </ul>
        

      </Nav>
      <Nav pullRight>
        {/*<NavItem eventKey={2}><Link to="/login">LogIn</Link></NavItem>
        <NavItem eventKey={3}><Link to="/loginbox">LogInBox</Link></NavItem>*/}
        <NavItem eventKey={4}><SubmitModal /></NavItem>
        <NavItem eventKey={5}>
          <Link to="/why">Why Stories</Link>
        </NavItem>
        
<NavDropdown eventKey={2} title="Concerns" id="basic-nav-dropdown">

          <MenuItem eventKey={2.1}>
            <Link to="/itwillchange">It Will Change</Link>
          </MenuItem>
          <MenuItem eventKey={2.2}>
            <Link to="/youareenough">You Are Enough</Link>
          </MenuItem>
          <MenuItem eventKey={2.3}>
            <Link to="/borrowview">Borrow Another View</Link>
          </MenuItem>
          <MenuItem eventKey={2.4}>
            <Link to="/iunderstand">Someone Understands
            </Link>
          </MenuItem>
          <MenuItem eventKey={2.5}>
            <Link to="/makeadifference">Make A Difference</Link>
          </MenuItem>
          <MenuItem eventKey={2.6}>
            <Link to="/youareunique">You Are Unique</Link></MenuItem>
          <MenuItem divider/>
          {/*<MenuItem eventKey={3.8}>
            <Link to="/"></Link>
          </MenuItem>*/}

        </NavDropdown>
        <NavItem eventKey={6}>
          <Link to="/saveher">Save Her</Link>
        </NavItem>
        
      </Nav>
    </Navbar.Collapse>

  </Navbar>
);

export default Navigation;
