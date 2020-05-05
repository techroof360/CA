import React from "react";
import "./myhome.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function myHome() {
    // const classes = useStyles();
  return (
    <div className="myHome">
   
   <div className="container" id="container">
  <div className="row" style={{width:1100}}>
    <div className="col">
           <div id="intro_est" >
                <div>
                    <img id="personImg" src="https://screenshotmonitor.com/Content/img/home/testimonial.png" alt="Craig Crawford - ScreenshotMonitor" />
                </div>
                <i>“The best way to follow your team overseas is to actually <b>see</b> what they're doing...”</i>
               
            </div>
                <span>- Craig Crawford, Paramount Profits</span>
            <div class="action_wrapper" style={{marginTop: 10}}>

    <a href="#" class="action_main demoLogin" id="Demo">Demo</a>

            <span style={{color:' #333'}}>&nbsp;or see &nbsp;</span><a href="#" id="PlanPricing">Plans &amp; pricing</a>
        </div>
    </div>
    <div class="col" >
      <img width="250px"  src="https://screenshotmonitor.com/content/img/employee_smile_sm.png"  id="handelEmployee" />

      <img width="250px"  src="https://screenshotmonitor.com/content/img/manager_smile_sm.png" id="handelManager" />

    </div>
  </div>
  
</div>

    </div>
  );
}
