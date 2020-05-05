import React , {useState, useEffect} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
  export default function InnerHeader() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="innerHeaderContainer">
       
      <Navbar  light expand="md" id="handelNav">
      
        {/* <NavbarToggler onClick={toggle} /> */}
        <Collapse isOpen={isOpen} navbar style={{backgroundColor:'#79975C'}}>
          <Nav className="mr-auto" navbar style={{backgroundColor:'#79975C'}} >
            <NavItem>
              <NavLink style={{ color: "white" }}>My Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar style={{backgroundColor:'#79975C', color: "white" }}>
              <DropdownToggle nav caret style={{ color: "white" }}>
                Timeline
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
               Brain May
                </DropdownItem>
                <DropdownItem>
               Demo Manager
                </DropdownItem>
                {/* <DropdownItem divider /> */}
                <DropdownItem>
                  James Hetfield
                </DropdownItem>
                <DropdownItem>
                  Till lindemann
                </DropdownItem>
                <DropdownItem>
                 Vicktor Zinchuk
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          {/* </Nav>
          <Nav className="mr-auto" navbar> */}
           
            <UncontrolledDropdown nav inNavbar id="drop" style={{backgroundColor:'#79975C', color: "white" }}>
               <DropdownToggle nav caret style={{  color: "white" }}>
                Reports
              </DropdownToggle> 
              
              <DropdownMenu right>
                <DropdownItem>
               Summary
                </DropdownItem>
                <DropdownItem>
              Detailed
                </DropdownItem>
                 <DropdownItem divider /> 
                <DropdownItem>
                  Saved Reports
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText style={{ color: "white" }}>Team</NavbarText>
            <UncontrolledDropdown nav inNavbar id="drop" style={{backgroundColor:'#79975C', color: "white" }}>
              <DropdownToggle nav caret style={{  color: "white" }}>
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
              <MenuIcon />
            {/* </IconButton> */}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
               Projects
                </DropdownItem>
                <DropdownItem>
              Clients
                </DropdownItem>
                 <DropdownItem divider /> 
                <DropdownItem>
                  Settings
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
     
    )
}
