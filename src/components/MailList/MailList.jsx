import React from 'react'
import "./mailList.css"
const MailList = () => {
  return (
<div className="mail">
    <h1 className="mailTitle">Save time, Save Money</h1>
    <span className="mailDesc">Sign in to receive updates</span>
    <div className="mailInputContainer">
        <input type="text" placeholder='Your Email'/>
        <button>Subscribe</button>
    </div>
</div>
  )
}

export default MailList