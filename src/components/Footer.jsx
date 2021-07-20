import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <h4>by Stefanie Nussbaum</h4>
        <Link to={{ pathname: "https://github.com/stefanie-nussbaum" }} target="_blank" >
          <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github" />
        </Link>
        <Link to={{ pathname: "https://www.linkedin.com/in/stefanie-nussbaum-9a9369135/" }} target="_blank" >
          <img className="icon" src="http://simpleicon.com/wp-content/uploads/linkedin.png" alt="linkedin" />
        </Link>
      </div>
    </div>
  )
}
