import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <h1>Watch Party</h1>
      </Link>
      <nav>
        <Link to="/movies">
          Movies
        </Link>
        <Link to="/shows">
          Shows
        </Link>
        <Link to="/add-new">
          Add New
        </Link>
      </nav>

    </div>
  )
}
