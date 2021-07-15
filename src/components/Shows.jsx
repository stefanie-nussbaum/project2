import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { URL, headers } from "../services"
import MediaCard from './MediaCard'

export default function Shows() {
  const [shows, setShows] = useState([])

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

  return (
    <div>
      <h2>Shows</h2>
      <div className="container">
        {shows.map(show => {
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
