import React from "react";
import "./pricing.css";
export default function Pricing() {
  return (
    <div id="body">
      <div id="page">
        {/* start content warper  */}
        <div id="content_wrapper">
          <div id="content_wrapper_inner">
            <div id="page_title" class="static fancyserif">
              <h1 id="handelHeading">Company Plans &amp; Pricing</h1>
            </div>
            {/* end content warper  */}

            <div id="content_wide" class="static fancyserif">
              {/* start the plan  */}
              <div id="plan">
                {/*  plan detail */}
                <div id="planDetail">
                  These monthly plans are for <b>Companies</b> to track their
                  employees or for freelancers to track their own time.
                  <br></br>
                  If you track your own time for other companies — you do not
                  need a plan and do not have to pay — your company pays for
                  you. Just ask your manager to send you an invitation email to
                  their ScreenshotMonitor team to start tracking your time and
                  screenshots for them.
                </div>
                {/*  plan detail  end*/}
                {/* plan one  start */}
                <div id="ppro" class="plan pfirst">
                  <div class="arrow"></div>
                  <div class="ptitle">
                    <u>Professional</u>
                    <div class="price strikethrough">
                      <small>$</small>
                      <b>9</b>
                      <br></br>
                      <br></br>
                      per user per month
                    </div>
                    <div>
                      <div class="price new-price">
                        <div>
                          <small>$</small>
                          <b>
                            6<sub>99</sub>
                          </b>
                        </div>
                        <div>
                          <span>
                            per user per month
                            <br></br>
                            if you start now!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li class="empty">&nbsp; </li>
                    <li>Time Tracking</li>
                    <li>Screenshot Monitoring</li>
                    <li>
                      up to <b>30</b> screenshots per hour
                    </li>
                    <li>
                      screenshots stored for <b>1 year</b>
                    </li>
                    <li>Individual settings</li>
                    <li>
                      Activity Level Tracking{" "}
                      <a target="_blank" href="">
                        <i
                          class="fa fa-info-circle"
                          title="Track mouse and keyboard Activity Level"
                        ></i>
                      </a>
                    </li>
                    <li>
                      App &amp; URL tracking{" "}
                      <a target="_blank" href="">
                        <i
                          class="fa fa-info-circle"
                          title="Track what applications your team members use and what websites they visit"
                        ></i>
                      </a>
                    </li>
                  </ul>
                  <a class="action_main" style={{ color: "white" }}>
                    &nbsp;&nbsp;&nbsp;Current plan&nbsp;&nbsp;&nbsp;
                  </a>

                  <div class="no-cc">
                    <span>
                      &nbsp;<br></br>&nbsp;
                    </span>
                  </div>
                </div>
                {/* plan one end  */}
                {/* plan two start  */}
                <div id="pstd" class="plan">
                  <div class="arrow"></div>
                  <div class="ptitle">
                    <div class="ptitle">
                      <u>Standard</u>
                      <div class="price strikethrough">
                        <small>$</small>
                        <b>6</b>
                        <br></br>
                        <br></br>
                        per user per month
                      </div>
                      <div>
                        <div class="price new-price">
                          <div>
                            <small>$</small>
                            <b>
                              4<sub>99</sub>
                            </b>
                          </div>
                          <div>
                            <span>
                              per user per month
                              <br></br>
                              if you start now!
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li class="empty">&nbsp; </li>
                    <li>Time Tracking</li>
                    <li>Screenshot Monitoring</li>
                    <li>
                      up to <b>6</b> screenshots per hour
                    </li>
                    <li>
                      screenshots stored for <b>3 months</b>{" "}
                    </li>
                    <li>Individual settings</li>
                    <li>
                      Activity Level Tracking{" "}
                      <a target="_blank" href="#">
                        <i
                          class="fa fa-info-circle"
                          title="Track mouse and keyboard Activity Level"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <span id="textDisable">App &amp; URL tracking</span>
                      <a target="_blank" href="#">
                        <i
                          class="fa fa-info-circle"
                          title="Track what applications your team members use and what websites they visit"
                        ></i>
                      </a>
                    </li>
                  </ul>
                  <a class="action_main" href="/subscription/change?std">
                    &nbsp;&nbsp;&nbsp;Downgrade<span>»</span>
                  </a>

                  <div class="no-cc">
                    <span>
                      &nbsp;<br></br>&nbsp;
                    </span>
                  </div>
                </div>
                {/* plan two end  */}
                {/* plan three start   */}
                <div id="pfree" class="plan">
                  <div class="arrow"></div>
                  <div class="ptitle">
                    <u>Free</u>
                    <div class="price free" style={{ marginTop: 50 }}>
                      <small>$</small>
                      <b>0</b>
                      <br></br>
                      <br></br>
                      <div>Limited to 3 users</div>
                    </div>

                    {/* <div >
                    <div class="price new-price">
                        <div>
                            <small>$</small><b>4<sub>99</sub></b>
                        </div>
                        <div >
                            <span >
                                per user per month
                                <br></br>
                                if you start now!
                            </span>
                        </div>
                    </div>
                </div>  */}
                  </div>
                  <ul>
                    <li class="empty">&nbsp;</li>
                    <li style={{ marginTop: 60 }}>Time Tracking</li>
                    <li>Screenshot Monitoring</li>
                    <li>
                      <b>3</b> screenshots per hour
                    </li>
                    <li>
                      screenshots stored for <b>2 weeks</b>
                    </li>
                    <li id="textDisable">Individual settings</li>
                    <li>
                      <span id="textDisable">Activity Level Tracking</span>
                      <a target="_blank" href="">
                        <i
                          class="fa fa-info-circle"
                          title="Track mouse and keyboard Activity Level"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <span id="textDisable">App &amp; URL tracking</span>
                      <a target="_blank" href="">
                        <i
                          class="fa fa-info-circle"
                          title="Track what applications your team members use and what websites they visit"
                        ></i>
                      </a>
                    </li>
                  </ul>
                  <a class="action_main" href="/">
                    &nbsp;&nbsp;&nbsp;Downgrade<span>»</span>
                  </a>

                  <div class="no-cc">
                    &nbsp;<br></br>&nbsp;
                  </div>
                </div>
                {/* plan three end  */}
                {/* frequently ask question  start  */}

                <div id="pricing-faq">
                  <h2>Frequently Asked Questions</h2>
                  <div id="columned">
                    <div>
                      <h4>Do I need a plan? Do I have to pay?</h4>
                      <p>
                        If you track your time for other companies – you do not
                        need a plan and do not have to pay – your company pays
                        for you.<br></br>
                        If you are a company – you do need at least a free plan
                        for others to track time for you. If you are a
                        freelancer and want to track your own time for yourself
                        (and maybe share it with some companies (observers)
                        later) – you need at least a free company plan.
                      </p>
                      <p>
                        If you have a free plan, 3 or less team members (1 owner
                        &amp; 2 employees) and OK with other free plan
                        limitations (see above) – you can keep it free forever.
                      </p>
                    </div>
                    <div>
                      <h4>How does the 14-day free trial work?</h4>
                      <p>
                        After the signup you get access to all the features in
                        the Professional Plan for 14 days. After the trial you
                        will be automatically downgraded to the Free plan unless
                        you upgrade to one of the paid plans.
                      </p>
                    </div>
                    <div>
                      <h4>For how many employees do I have to pay?</h4>
                      <p>
                        You will be charged for all team members on your Team
                        page except archived. Owners are free unless they track
                        their own time. For example you have 6 people on your
                        Team: 5 freelancers (1 of them archived) and yourself -
                        you will be charged for 4 people assuming you do not
                        track your own time.
                      </p>
                      <p>
                        The fees are prorated – if you add an employee for a
                        week, then remove or archive them - you'll pay for that
                        week only, not month. You are free to add or delete
                        employees, archive or restore them any time as you see
                        fit.
                      </p>
                    </div>
                    <div>
                      <h4>Do you offer metered pricing?</h4>
                      <p>
                        Yes, we do. Metered pricing may suit you better when you
                        have high rotation of workers and want to pay only for
                        the hours logged. To use the metered pricing,{" "}
                        <a href="">Start Trial</a> now and when you upgrade to a
                        paid plan, you will have an option to select a metered
                        pricing. The price is $0.16 per user per hour worked for
                        Professional plan and $0.12 for Standard plan.
                      </p>
                    </div>
                    <div>
                      <h4>Is my data safe?</h4>
                      <p>
                        We take security seriously. Our servers are hosted in a
                        world class data center that is protected by biometric
                        locks and 24-hour surveillance. We ensure that our
                        application is always up to date with the latest
                        security patches. All ScreenshotMonitor plans include
                        SSL encryption on data transfer and access to keep your
                        data safe.
                      </p>
                    </div>
                    <div>
                      <h4>How long do you keep the data?</h4>
                      <p>
                        The time and task notes are kept forever even on the
                        free plan as long as your account is active.
                      </p>
                      <p>
                        However it depends on your plan how long the screenshot
                        images are kept. For Professional plan, screenshots are
                        kept for 1 year (after 3 months we retain every second
                        screenshot). For Standard – 3 months. For Free plan – 2
                        weeks only.
                      </p>
                    </div>
                    <div>
                      <h4>Do you have any contracts or cancellation fees?</h4>
                      <p>
                        No. ScreenshotMonitor is a pay-as-you-go service. We do
                        not have contracts or cancellation fees. You can cancel
                        whenever you want paying only the balance you already
                        owe.
                      </p>
                    </div>

                    <div>
                      <h4>Can I upgrade or downgrade anytime?</h4>
                      <p>
                        Yes. ScreenshotMonitor is a pay-as-you-go service and
                        you can upgrade, downgrade or cancel at any time. Click
                        on "My Account" link in your ScreenshotMonitor menu to
                        change your plan.
                      </p>
                    </div>
                    <div style={{paddingBottom:100}}>
                      <h4>What types of payment do you accept?</h4>
                      <p>
                        We accept Visa, Mastercard, Discover and American
                        Express for automatic payments. You can also use PayPal,
                        wire transfers or checks to add credit to your account.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4>Do you have more questions?</h4>
                    <p>
                      Please visit our <a href="">Customer Support</a>. We have
                      FAQ, knowledge base and you can ask your question there.
                      <br></br>
                      Or just email us at{" "}
                      <a href="">contact@screenshotmonitor.com</a> and we will
                      be glad to answer all your questions.
                    </p>
                  </div>
                </div>

                {/* frequently ask question  end  */}
              </div>
              {/* end the plan  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
