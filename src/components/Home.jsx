import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { URL, headers } from '../services'
import MediaCard from './MediaCard'


export default function Home() {
  const [multimedia, setMultimedia] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(URL, { headers })
      setMultimedia(res.data.records)
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <h2>Watchlist</h2>
      {multimedia.map(media => {
        return (
          <div key={media.id} className="container">
            <MediaCard key={media.id} media={media} />
          </div>
        )
      })}
    </div>
  )
}
