import React from 'react'

export default function Footer() {
    return (
        <div>
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
      
    </div>
        <div class="copyright">
            © 2020 Screenshot Monitor
        </div>
</div>
  
        </div>
    )
}
