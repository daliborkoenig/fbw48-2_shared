import React from 'react'

function Contact() {
  return (
    <div className="Contact">
      <h1>Contact me</h1>
      <form>
        <input type="text" name="" id="" placeholder="Your name"/>
        <input type="email" name="" id=""  placeholder="Your email"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
        <input type="submit" value="Send Message" />
      </form>
      
    </div>
  )
}

export default Contact
