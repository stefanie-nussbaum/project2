import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { URL, headers } from "../services"
import MediaCard from './MediaCard'

export default function Movies() {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(URL, { headers })
      setMovie(res.data.records.filter(movie => {
        if (movie.fields.movie) {
          return movie
        }
        return null
      }))
    }
    fetchMovies()
  }, [])

  return (
    <div>
      <MediaCard key={movie.id} media={movie} />
    </div>
  )
}
