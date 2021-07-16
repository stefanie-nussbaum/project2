import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <h3>By Stefanie Nussbaum</h3>
      <Link to={"https://github.com/stefanie-nussbaum"} >
        <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" />
      </Link>
      <Link to={"https://www.linkedin.com/in/stefanie-nussbaum-9a9369135/"}>
        <img className="icon" src="http://simpleicon.com/wp-content/uploads/linkedin.png" />
      </Link>
    </div>
  )
}
