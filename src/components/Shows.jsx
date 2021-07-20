import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { URL, headers } from "../services"
import Loading from './Loading'
import MediaCard from './MediaCard'

export default function Shows() {
  const [shows, setShows] = useState([])
  const [filteredShows, setFilteredShows] = useState([])
  const [filterInput, setFilterInput] = useState("")

  useEffect(() => {
    const fetchShows = async () => {
      const res = await axios.get(URL, { headers })
      res.data.records.sort(function (a, b) {
        if (a.fields.title < b.fields.title) return -1
        if (a.fields.title > b.fields.title) return 1
        return 0
      })
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
    return <Loading />
  }

  return (
    <div>
      <h2>Shows</h2>
      <div className="container">
        <select className="filter-genre" name="genre" defaultValue={filterInput} onChange={handleChange} >
          <option value="" >Filter by genre...</option>
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
            <div key={show.id} className="container" >
              <MediaCard key={show.id} media={show} />
            </div>
          )
        })}
      </div>

    </div>
  )
}
