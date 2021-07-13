import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <h1>Watch Party</h1>
      <Link to="/movies">
        Movies
      </Link>
      <Link to="/shows">
        Shows
      </Link>
      <Link to="/add-new">
        Add New
      </Link>
    </div>
  )
}
