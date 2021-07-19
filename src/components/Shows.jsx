import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import { URL, headers } from "../services"
import MediaCard from './MediaCard'

export default function Shows() {
  const [shows, setShows] = useState([])
  const [filteredShows, setFilteredShows] = useState([])
  const [filterInput, setFilterInput] = useState("")

  useEffect(() => {
    const fetchShows = async () => {
      const res = await axios.get(URL, { headers })
      setShows(res.data.records.filter(show => {
        if (show.fields.movie === "false") {
          return show
        }
        return null
      }))
    }
    fetchShows()
  }, [])

  useEffect(() => {
    setFilteredShows(shows)
  }, [shows])

  useEffect(() => {
    if (filterInput !== "") {
      setFilteredShows(shows.filter((show) => {
        if (show.fields.genre === filterInput) {
          return show
        }
        return null
      }))
    } else {
      setFilteredShows(shows)
    }
  }, [filterInput, shows])

  const handleChange = (e) => {
    setFilterInput(e.target.value)
  }

  if (shows.length === 0) {
    return <ClipLoader />
  }

  return (
    <div>
      <h2>Shows</h2>
      <div className="container">
        <select className="filter-genre" name="genre" value={filterInput} onChange={handleChange} >
          <option value="" selected >Filter by genre...</option>
          <option value="action" >Action</option>
          <option value="animation" >Animation</option>
          <option value="drama" >Drama</option>
          <option value="comedy" >Comedy</option>
          <option value="fantasy" >Fantasy</option>
          <option value="horror" >Horror</option>
          <option value="romance" >Romance</option>
          <option value="sci-fi" >Sci-fi</option>
          <option value="thriller" >Thriller</option>
          <option value="other" >Other</option>
        </select>
      </div>
      <div className="container">
        {filteredShows.map(show => {
          return (
            <div >
              <MediaCard key={show.id} media={show} />
            </div>
          )
        })}
      </div>

    </div>
  )
}
