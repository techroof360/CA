import React from "react";
import "./howItsWork.css";

export default function HowItsWork() {
  return (
    <div id="body">
      <div id="page_inner">
        <div id="content_wrapper">
          <div id="content_wrapper_inner">
            {/* page title start */}
            <div id="page_title" class="static fancyserif">
              <h1 id="howitwork">How it works</h1>
              <div id="floadRight">
                <a class="action_main" href="">
                  Plans &amp; pricing
                </a>
              </div>
            </div>
            {/* page title end */}
            {/* first box start  */}
            <div id="content_wide" class="static fancyserif">
              <div class="scr clearfix">
                <div>
                  <img src="https://screenshotmonitor.com/content/img/tour/10-invite.png" />
                  <div></div>
                </div>
                <h4>
                  <span>1</span>Manager invites employees
                </h4>
                <p>
                  After <a href="">selecting a plan</a>, a company manager
                  invites employees to the company team. When employees accept
                  the invitation, they can start tracking time and submitting
                  their screenshots for that company.
                </p>
              </div>
            </div>
            {/* first box end  */}
            {/* second box start  */}

            <div class="scr clearfix">
        <div>
            <img src="https://screenshotmonitor.com/content/img/tour/20-start.png" alt="Log In - ScreenshotMonitor"/>
            <div></div>
        </div>
        <h4><span>2</span>Employee run desktop application</h4>

        <p>
            Employee install the
                <a href="/download">ScreenshotMonitor desktop application</a>
            {/* <span style="color: #777777">
                <i class="fa fa-windows"></i>
                <i class="fa fa-linux"></i>
                <i class="fa fa-apple"></i>
            </span> */}
            
            Log In, select a project and press the Start button to start tracking time and screenshots for that project. Note that the application works perfectly even when offline. The data will automatically be uploaded to the web when the web connection is restored.
        </p>
    </div>
            {/* second box end  */}
            {/* third box start  */}

            <div class="scr clearfix">
        <div>
            <img src="https://screenshotmonitor.com/content/img/tour/30-status.png" alt="Time tracking - ScreenshotMonitor" />
            <div></div>
        </div>
        <h4><span>3</span>Application tracks time and screenshots</h4>
        <p>
            The application starts tracking employee’s time and taking screenshots at random intervals until the Stop button is pressed.
            If Autostart option is selected, the program will start whenever employees start using their computers. The program will also automatically stop tracking if there is no activity.
            This may be useful for tracking in-office employees where full-time tracking is needed. Note:  Employee will always be aware that the program is running on their computers. By design there is no way of running ScreenshotMonitor in stealth/spy mode.
        </p>

    </div>
            {/* third box end  */}
            {/* four box start  */}
            <div class="scr clearfix">
        <div>
            <img src="https://screenshotmonitor.com/content/img/tour/40-overview.png" alt="Overview - ScreenshotMonitor"/>
            <div></div>
        </div>
        <h4><span>4</span>Managers see it all on the web</h4>
        <p>
            The desktop application continuously sends time tracking data and screenshots to the web so managers can monitor their employees in real time. There is nothing for managers to install — they can see all the information online through screenshotmonitor.com.
            On the dashboard managers can see when and for how long each of their employees have worked, who is active at the moment and the latest screenshot.
        </p>

    </div>

            {/* four box end  */}
            {/* five box start  */}
            <div class="scr clearfix">
        <div>
            <img src="https://screenshotmonitor.com/content/img/tour/50-timeline.png" alt="Timeline - ScreenshotMonitor"/>
            <div></div>
        </div>
        <h4><span>5</span>Full details on the timeline</h4>
        <p>
            On employee's timeline you can see more details: how much time and money was spent on each project and each tasks, user activity level, applications that were running and websites visited along with the time spent on each. And of course all of the screenshots taken that day from employee's monitor at random intervals with frequency up to 30 per hour.  Employee see the same information and can add time manually ("Offline time").
        </p>

    </div>
            {/* five box end  */}
            {/* six box start  */}
            <div class="scr clearfix" id="clearBottom">
        <div>
            <img width="480px" src="https://screenshotmonitor.com/content/img/tour/60-reports.png" alt="Reports - ScreenshotMonitor" />
            <div></div>
        </div>
        <h4><span>6</span>Get reports you need, at a glance</h4>
        <p>
            Get a clear picture of time and money your team spends on each task.
            Select specific employees, use date range shortcuts, see grouped by date or detailed time-sheets and download them in Excel for further analysis or to generate invoices. 
            Your employees can also see the reports for their own time and use them to generate invoices if needed. All in a few clicks.
        </p>
    </div>
            {/* six box end  */}
            {/* plan and pricing start  */}
            <div class="clearfix">

        <p id="planAndPrice">
            <a href="">Plans &amp; pricing →</a>
        </p>
    </div>
            {/* plan and pricng end  */}
          </div>
        </div>
      </div>
    </div>
  );
}
