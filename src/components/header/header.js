import React , {useState} from "react";
import { Route,  BrowserRouter , Redirect , Link} from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { fade, makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Icon from "@material-ui/core/Icon";
import logo from "../assets/logo.PNG";
import myAccountLogo from "../assets/tools-solid.svg";
import "./header.css";

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
import InnerHeader from "./innerHeader";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
export default function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  //inner header
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      style={{display:'flex', color:'white', flexDirection:'row-reverse'}}
    >
      <MenuItem>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <p>Demo</p>
      </MenuItem>
      <MenuItem>
        <p>How it Works</p>
      </MenuItem>
      <MenuItem>
        <p>Pricing</p>
      </MenuItem>
      <MenuItem>
        <p>download</p>
      </MenuItem>
      <MenuItem>
        <p>Support</p>
      </MenuItem>
      <MenuItem>
        <p>Blog</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="headerContainer"
        style={{ height: 110 }}
      >
        <Grid item xs={6}>
          <img src={logo} />
        </Grid>
        <Grid item xs={6}>
          {/* <AppBar position="static" className="headerContainer"> */}
          {/* <Toolbar> */}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           <Link to="/"> <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Home
              </Button>
            </Typography>
            </Link>
            <Link to="/myhome">
            <Typography className={classes.title} style={{ color: "white" }}>
             <Button color="inherit" className="text">
                Demo
              </Button>
            </Typography>
            </Link>
          <Link to="/tour">  <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                How it Work
              </Button>
            </Typography></Link>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Pricing
              </Button>
            </Typography>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Download
              </Button>
            </Typography>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Support
              </Button>
            </Typography>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Blog
              </Button>
            </Typography>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              id="handelMobile"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          {/* </Toolbar> */}
          {/* </AppBar> */}
          {renderMobileMenu}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="headerContainer"
          ></Grid>
          <Grid
            item
            xs={8}
            style={{ backgroundColor: "#16262F", borderRadius: 10 }}
          >
            {/* <div className={classes.grow} /> */}
            <div className={classes.sectionDesktop}>
              <Typography
                className={classes.title}
                style={{
                  color: "#999",
                  fontSize: 14,
                  marginTop: 9,
                  marginLeft: 10,
                  paddingLeft: 20,
                }}
              >
                Hello, Demo!
              </Typography>
              <Typography
                className={classes.title}
                style={{
                  color: "white",
                  backgroundColor: "#16262",
                  padding: 3,
                }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#16262F", color: "white" }}
                  className={classes.button}
                  startIcon={
                    <Icon
                      className="fa fa-user"
                      style={{ fontSize: 24, color: "white" }}
                    />
                  }
                >
                  My Home
                </Button>
              </Typography>

              <Typography
                className={classes.title}
                style={{ color: "white", padding: 2 }}
              >
                {/* <Icon className="fa fa-tools" style={{ fontSize: 12 }}/> */}
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#16262F", color: "white" }}
                  className={classes.button}
                  startIcon={<Icon className="fa fa-user" />}
                >
                  My Account
                </Button>
              </Typography>
              <Typography
                className={classes.title}
                style={{ color: "white", backgroundColor: "#16262" }}
              >
                <Button
                  //  variant="contained"
                  style={{
                    backgroundColor: "#749455",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                  // className={classes.button}
                >
                  Log out
                </Button>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
<InnerHeader/>
      {/* <Grid container  style={{ backgroundColor: "#79975C" }}>
        <Grid item >
        <div style={{display:'flex'}}>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Home
              </Button>
            </Typography>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Demo
              </Button>
            </Typography>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                How it Work
              </Button>
            </Typography>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Pricing
              </Button>
            </Typography>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Download
              </Button>
            </Typography>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Support
              </Button>
            </Typography>
            <Typography className={classes.title} style={{ color: "white" }}>
              <Button color="inherit" className="text">
                Blog
              </Button>
            </Typography>
          </div>
        </Grid>
         <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid> 
      </Grid> */}
    </div>
  );
}
