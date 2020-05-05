import React from "react";
import "./myhome.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function myHome() {
  // const classes = useStyles();
  return (
    <div>
      <div className="myHome">
        <div className="container" id="container">
          <div className="row" style={{ width: 1100 }}>
            <div className="col">
              <div id="intro_est">
                <div>
                  <img
                    id="personImg"
                    src="https://screenshotmonitor.com/Content/img/home/testimonial.png"
                    alt="Craig Crawford - ScreenshotMonitor"
                  />
                </div>
                <i>
                  “The best way to follow your team overseas is to actually{" "}
                  <b>see</b> what they're doing...”
                </i>
              </div>
              <span>- Craig Crawford, Paramount Profits</span>
              <div class="action_wrapper" style={{ marginTop: 10 }}>
                <a href="#" class="action_main demoLogin" id="Demo">
                  Demo
                </a>

                <span style={{ color: " #333" }}>&nbsp;or see &nbsp;</span>
                <a href="#" id="PlanPricing">
                  Plans &amp; pricing
                </a>
              </div>
            </div>
            <div class="col">
              <img
                width="250px"
                src="https://screenshotmonitor.com/content/img/employee_smile_sm.png"
                id="handelEmployee"
              />

              <img
                width="250px"
                src="https://screenshotmonitor.com/content/img/manager_smile_sm.png"
                id="handelManager"
              />
            </div>
          </div>
        </div>
        {/* my home demo images container ended  */}
      </div>

      <div>
        <div id="dark">
          <div class="animated fadeInUp">
            <h1>
              Track employees’ <b>time</b> and <b>screenshots</b>. See it on the
              web.
            </h1>
            <h2>
              Get a clear picture of time and money your remote or office team
              spends on each task.
            </h2>
            <hr></hr>
            <ul id="three">
              <li>
                <a href="#track">
                  <img
                    src="https://screenshotmonitor.com/content/img/home/t-app.png"
                    alt="Application - screenshotmonitor.com"
                  />
                </a>
                <h4>Track effortlessly</h4>
                <h5>with employee desktop application</h5>
              </li>
              <li>
                <a href="#screenshots">
                  <img
                    src="https://screenshotmonitor.com/content/img/tour/40-overview.png"
                    alt="Overview - screenshotmonitor.com"
                  />
                </a>
                <h4>See screenshots</h4>
                <h5>and tracked time uploaded to the web</h5>
              </li>
              <li>
                <a href="#reports">
                  <img
                    src="https://screenshotmonitor.com/content/img/tour/50-timeline.png"
                    alt="Timeline - screenshotmonitor.com"
                  />
                </a>
                <h4>Get insights</h4>
                <h5>with reports and timeline</h5>
              </li>
            </ul>
            <table id="dark-join">
              <tbody>
                <tr>
                  <th rowspan="2">
                    <canvas id="dj-left" height="110" width="300"></canvas>
                  </th>
                  <th>
                    <canvas id="dj-center" width="20" height="48"></canvas>
                  </th>
                  <th rowspan="2">
                    <canvas id="dj-right" height="110" width="300"></canvas>
                  </th>
                </tr>
                <tr>
                  <td>
                    <a href="/signup" class="action_main">
                      Sign up for free!
                    </a>
                    <br />
                    <a href="/pricing" id="dark-pricing">
                      See plans &amp; pricing
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="trusted">
              <h4>
                Over <b>20 000+</b> businesses already trust us
              </h4>
              <img
                src="https://screenshotmonitor.com/content/img/home/trusted.png"
                alt="Customrs - screenshotmonitor.com"
              />
            </div>
          </div>
        </div>
        <div id="home-tour-container">
          <div className="quote-container">
            <p class="quote">
              <span>
                “We have employees working from 5 countries <br></br>
                &nbsp;&nbsp;and the app saves us a lot of time managing
                them.&nbsp;&nbsp;
                <br />I simply love ScreenshotMonitor!”
              </span>
            </p>
            <p class="cite">
              <i>-Milenko Pilic, HeySuccess.com</i>
            </p>
          </div>
        
        <div id="home-tour">
          <div id="handel-container-home-tour">
            <a id="track"></a>
            <img
              src="https://screenshotmonitor.com/Content/img/home/program.png"
              alt="Track time and tasks effortlessly"
              class="scrolledto"
              style={{ display: "block" }}
            />
            <div>
              <h2>Track time and tasks effortlessly</h2>
              <b>
                Your remote or office employees start and stop monitoring
                themselves using a lightweight desktop application.{" "}
              </b>
              <p>
                They create a task, and the program automatically tracks time
                and screenshots for this task. This information is then securely
                sent to <a href="/">screenshotmonitor.com</a> for you to see in
                real time. No spying and your employees are in control!
                <br></br>
                <br></br>
                For more details see <a href="#">How it works</a>.s
              </p>
            </div>
          </div>
       
        <br></br>
        <br></br>
        <div class="quote-container margined">
                <p class="quote">
                    <span>
                        “ScreenshotMonitor helps me manage<br></br>
                        my team in different locations and allows them the <br></br>
                        flexibility to work remotely.”
                    </span>
                </p>
                <p class="cite">
                    <i>-Efrat Gotlib, Therapy24x7</i>
                </p>
          </div>
        <div class="even" id="even">
                <a id="screenshots"></a>
                <div>
                    <h2>See time and screenshots on the web</h2>
                    <b>The tracked time, screenshots and task notes are all delivered to your dashboard. </b>
                    <p>
                        There is nothing for you (the manager) to install — you can see it online using your computer, tablet or a smartphone. You will know exactly when and what your employees have worked on, how much time and money they have spent on each task and what was on their monitors at that time. You will know for certain that you are paying for actual work, not for time spent on Facebook or shopping.

                        <br></br><br></br>
                       
                        For more details see <a href="">How it works</a>.
                    </p>
                </div>
                <img src="https://screenshotmonitor.com/Content/img/home/timeline.png" alt="See time and screenshots on the web" class="scrolledto"/>
          </div>
          <div class="quote-container margined">
                <p class="quote">
                    <span>
                        “ScreenshotMonitor allows us to look over completed <br></br>
                        work by remote staff, shows when my staff is working and keeps <br></br>
                        a backup of work produced. Highly recommend!”
                    </span>
                </p>
                <p class="cite">
                    <i>-Alex Dibben, Expect Best</i>
                </p>
            </div>
            <div  id="even">
                <a id="reports"></a>
                <img src="https://screenshotmonitor.com/Content/img/home/reports.png" alt="Get reports you need, at a glance" class="scrolledto"/>
                <div>
                    <h2>Get reports you need, at a glance</h2>
                    <b>Get a clear picture of time and money your team spends on each task.</b>
                    <p>
                        Select specific employees, use date range shortcuts, see grouped by date or detailed time-sheets and download them in Excel for further analysis or to generate invoices.
                        Your employees can also see the reports for their own time and use them to generate invoices if needed. All in a few clicks.
                        <br></br>
                        <br></br>
                        For more details see <a href="/tour">How it works</a>.
                    </p>
                </div>
            </div>
            <div class="quote-container alter">
            <p class="quote">
                <span>
                    ScreenshotMonitor is a simple, but powerful<br></br>
                    tool you can start using in your business in 10 minutes. <br></br>
                    Don’t know how we worked without it before!”
                </span>
            </p>
            <p class="cite">
                <i>-Ulf Kuhn, gananci.com</i>
            </p>
        </div>
        <div id="hor-tour">
        <div>
            <i class="icon-cloud-upload"></i>
            <h3>Track without Internet</h3>
            <p style={{color:'white'}}>
                The app will continue time tracking and screenshot capture even with no connectivity to the web. The data will automatically be uploaded to the web next time there is an Internet connection. If an employee works without a computer – no problem either, he can add “offline time” without screenshots at any time.
            </p>
        </div>
        <div>
            <i class="icon-group"></i>
            <h3>Use for office employees</h3>
            <p  style={{color:'white'}}>
                ScreenshotMonitor is a great monitoring software for both office employees and  <a target="_blank" href="">oursourced workers</a>.
                An office employee can start the tracking: auto-start-stop features will take care of the rest. The program will stop automatically when a user is inactive (lunch or the end of the day) and will resume once a user is back.
            </p>
        </div>
        <div>
            <i class="icon-cog"></i>
            <h3>Integrate using Web API</h3>
            <p style={{color:'white'}}>
                It is simple to retrieve tracked time and task notes by employee in <a href="">JSON</a> format using <a target="_blank" href="">ScreenshotMonitor API</a> web service. Using this data you can integrate ScreenshotMonitor with your project management, accounting or other management processes.
            </p>
        </div>
    </div>
     <div id="bot-join">
        <a href="" class="action_main">&nbsp;&nbsp;&nbsp;Start employee time tracking! <span >»</span></a>
        <div>No obligation, no credit card required.</div>
    </div> 
    {/*  footer start  */}
    <div id="site_footer_wrapper">
    <div id="site_footer">
        <ul id="footer_left" style={{display:'flex'}}>
            <li><a href="/support">Support</a></li>
            <li><a target="_blank" href="https://screenshotmonitor.com/blog">Blog</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/affiliate">Affiliate program</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/privacy">Privacy</a></li>
<li>
    <ul style={{display:'flex', padding:3}}>

        <li >
            <a href="" style={{padding:10}} >
                <i class="fa fa-facebook-square color-facebook"></i>
            </a>
        </li>
        <li >
            <a href="" target="_blank" style={{padding:10}}>
                <i class="fa fa-twitter-square color-twitter"></i>
            </a>
        </li>
        
        <li >
            <a href="" target="_blank" style={{padding:10}}>
                <i class="fa fa-linkedin-square color-linkedin"></i>
            </a>
        </li>

    </ul>
</li>        </ul>
        {/* <div id="footer_right" style="color: #aaa;float: right;margin-right: 10px;" itemscope="" itemtype="http://schema.org/Organization">
            <meta itemprop="name" content="Screenshot Monitor">
            <div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
                <meta itemprop="addressCountry" content="US">
                <span itemprop="streetAddress">18-23 Greenwood Dr </span>
                <span itemprop="addressLocality">Fair Lawn</span>,
                <span itemprop="addressRegion">NJ</span>
                <span itemprop="postalCode">07410</span>
            </div>
            <meta itemprop="email" content="support@screenshotmonitor.com">
        </div> */}
    </div>
        <div class="copyright">
            © 2020 Screenshot Monitor
        </div>
</div>

    {/* footer end  */}
          </div> 
            </div>
      </div>
    </div>
  );
}
