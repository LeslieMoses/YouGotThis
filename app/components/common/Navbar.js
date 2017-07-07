import React from "react";
import {Link} from "react-router";
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
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/" className="navHed">You Got This</Link>
        {/*<a href="#" className="navHed">You Got This</a>*/}
      </Navbar.Brand>
      
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {/*<NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>*/}
        <NavItem eventKey={1}>
          <Link to="/favorites">Favorites</Link>
        </NavItem>

        <ul className="nav navbar-nav">
          {/*className={location.pathname === "/" && "active"}*/}
          {/*<li >
            <Link to="/">Home</Link>
          </li>*/}
          {/*<li className={location.pathname === "/profile" && "active"}>
                   <Link to="/profile">Profile</Link>
          </li>*/}
          {/*className={location.pathname === "/submitstory" && "active"}*/}
          <li >
            {/*change Fav to Profile*/}
            <Link to="/submitstory">Submit Story</Link>
          </li>
        </ul>
        <NavDropdown eventKey={3} title="Concerns" id="basic-nav-dropdown">

          <MenuItem eventKey={3.1}>
            <Link to="/concerns">Concerns</Link>
          </MenuItem>
          <MenuItem eventKey={3.2}><Link to="/itwillchange">It Will Change</Link></MenuItem>
          <MenuItem eventKey={3.3}><Link to="/youareenough">You Are Enough</Link></MenuItem>
          <MenuItem eventKey={3.4}><Link to="/seewhatisee">See What I See</Link></MenuItem>
          <MenuItem eventKey={3.5}><Link to="/iunderstand">I Understand </Link></MenuItem>
          <MenuItem eventKey={3.6}><Link to="/makeadifference">Make A Difference</Link></MenuItem>
          <MenuItem eventKey={3.7}><Link to="/youareunique"> </Link>You Are Unique</MenuItem>                                                  
          <MenuItem divider/>
          <MenuItem eventKey={3.8}><Link to="/"> </Link></MenuItem>

        </NavDropdown>
      </Nav>
      <Nav pullRight>
        {/*<NavItem eventKey={2}><Link to="/login">LogIn</Link></NavItem>
        <NavItem eventKey={3}><Link to="/loginbox">LogInBox</Link></NavItem>*/}
        {/*<NavItem eventKey={4}><Link to="/submitstory">Submit Story</Link></NavItem>*/}
        <NavItem eventKey={5}>
          <Link to="/why">Why</Link>
        </NavItem>
        <NavItem eventKey={6}>
          <Link to="/aboutus">About Us</Link>
        </NavItem>

      </Nav>
    </Navbar.Collapse>

  </Navbar>
);

export default Navigation;
