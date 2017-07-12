import React from "react";
import {Link} from "react-router";
import SubmitModal from "./SubmitModal";

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
                <Navbar.Brand>
            <Link to="/" className="navHed">You Got This</Link>
            {/*<a href="#" className="navHed">You Got This</a>*/}
          </Navbar.Brand>
      <Nav>
        <Navbar.Header>


          <Navbar.Toggle/>
        </Navbar.Header>


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
          {/*<li >*/}
            {/*<Link to="/submitmodal">Submit Modal</Link>*/}
          {/*</li>*/}
        </ul>
        

      </Nav>
      <Nav pullRight>
        {/*<NavItem eventKey={2}><Link to="/login">LogIn</Link></NavItem>
        <NavItem eventKey={3}><Link to="/loginbox">LogInBox</Link></NavItem>*/}
        <NavItem eventKey={4}><SubmitModal /></NavItem>
        <NavItem eventKey={5}>
          <Link to="/why">Why Stories</Link>
        </NavItem>
        <NavItem eventKey={6}>
          <Link to="/aboutus">About Us</Link>
        </NavItem>
<NavDropdown eventKey={2} title="Concerns" id="basic-nav-dropdown">

          <MenuItem eventKey={2.1}>
            <Link to="/itwillchange">It Will Change</Link>
          </MenuItem>
          <MenuItem eventKey={2.2}>
            <Link to="/youareenough">You Are Enough</Link>
          </MenuItem>
          <MenuItem eventKey={2.3}>
            <Link to="/seewhatisee">See What I See</Link>
          </MenuItem>
          <MenuItem eventKey={2.4}>
            <Link to="/iunderstand">I Understand
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
        
      </Nav>
    </Navbar.Collapse>

  </Navbar>
);

export default Navigation;
