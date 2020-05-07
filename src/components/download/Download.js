import React from "react";
import './download.css';
export default function Download() {
  return (
    <div>
      <div id="content_wrapper">
        <div id="content_wrapper_inner">
          <div id="react-view">
            <div>
              <div id="page_title" class="smaller">
                <h1>Download application</h1>
              </div>
              <div id="content_wide" class="tpl-download">
                <h4>Download employee desktop application</h4>
                <div id="tplImg">
                  <img id="tpl-Handel-img" src="https://screenshotmonitor.com/content/img/tour/30-status.png" />
                </div>
                <p>
                  This lightweight application is{" "}
                  <b>only for employees, not managers</b>.<br></br>
                  Company managers can see the recorded time and screenshots on
                  this website.
                </p>
                <p style={{textAlign:'center'}}>
                  <a href="" class="action_micro" id="downloadImg">
                    <i class="fa fa-download"></i>&nbsp;&nbsp; Download
                    application for Windows
                  </a>
                  <br></br>
                  <a href="" id="macOS">Download application for macOS</a>
                  <br></br>
                  <a href="" id="linux">Download application for Linux</a>
                  <br></br>
                  <a href="/" id="linux">Download browser extension</a>
                </p>
                <h4>What is this?</h4>
                <p>
                  This is a Windows desktop application for employees. It is
                  started and stopped by an employee to track time and take
                  their computer screenshots during work.
                </p>
                <p>
                  After the Stop button is pressed – no screenshots are being
                  taken. You can review your time and screenshots at
                  <a href="">My Home</a>. You can also delete your screenshots
                  there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
