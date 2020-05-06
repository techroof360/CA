import React from "react";
import "./demo.css";

export default function Demo() {
  return (
    <div id="content_wrapper">
      <div id="content_wrapper_inner">
        <div id="react-view">
          <div>
            <div id="page_title">
              <span class="__timezone-switch">
                All times are UTC-7
                <a
                  href=""
                  class="fa fa-cog"
                  title=""
                  data-original-title="Change"
                >
                  <i></i>
                </a>
              </span>
              <h1>Manager Dashboard</h1>
            </div>
            <div id="content_wide" class="_index">
              <table class="empls">
                <tbody>
                  <tr>
                    <th>
                      <a href="" class="order-link">
                        <u>Employee</u>
                      </a>
                    </th>
                    <th class="lastworked">
                      <a href="" class="order-link">
                        <u>Last active</u>
                        <i class="fa fa-caret-up"></i>
                      </a>
                    </th>
                    <th class="daywork">Today</th>
                    <th class="daywork">Yesterday</th>
                    <th class="daywork">This week</th>
                    <th class="daywork">This month</th>
                  </tr>
                  <tr id="handelSecondTr">
                    <td>2 online, 4 worked today</td>
                    <td></td>
                    <td>
                      <a href="">16h 39m</a>
                      <br />
                      <span id="handelSecondTr1">$144</span>
                    </td>
                    <td>
                      <a href="">27h 36m</a>
                      <br />
                      <span id="handelSecondTr1">$235</span>
                    </td>
                    <td>
                      <a href="">108h 09m</a>
                      <br />
                      <span id="handelSecondTr1">$956</span>
                    </td>
                    <td>
                      <a href="">169h 11m</a>
                      <br />
                      <span id="handelSecondTr1">$1,491</span>
                    </td>
                  </tr>
                  <tr class="empl">
                    <td>
                      <div class="name">
                        <span class="empl-status online"></span>&nbsp;
                        <a href="">James Hetfield</a>
                        <div id="idSpan">
                          <span class="project-label">
                            Administration ● Amazon
                          </span>
                          <span class="noteLabel">Support</span>
                        </div>
                      </div>
                    </td>
                    <td class="lastworked">
                      <a class="_myhome-screen" id="68628" href="">
                        <span>a minute ago</span>
                        <img width= "180px" height="101px" src="https://s3.amazonaws.com/screenshotmonitor-demo/19t.jpg" />
                      </a>
                    </td>
                    <td class="daywork">
                      <a href="">4h 07m</a>
                      <br />
                      <div title="" class="range-money">
                        $41
                      </div>
                    </td>
                    <td class="daywork">
                      <a href="">6h 44m</a>
                      <br />
                      <div title="" class="range-money">
                        $67
                      </div>
                    </td>
                    <td class="daywork">
                      <a href="">25h 28m</a>
                      <br />
                      <div title="" class="range-money">
                        $255
                      </div>
                    </td>
                    <td class="daywork">
                      <a href="">39h 33m</a>
                      <br />
                      <div title="" class="range-money">
                        $396
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
