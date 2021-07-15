import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { URL, headers } from "../services"
import MediaCard from './MediaCard'

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(URL, { headers })
      setMovies(res.data.records.filter(movie => {
        if (movie.fields.movie === "true") {
          return movie
        }
        return null
      }))
    }
    fetchMovies()
  }, [])

  return (
    <div>
      {movies.map(movie => {
        return (
          <div className="container">
            <MediaCard key={movie.id} media={movie} />
          </div>
        )
      })}

    </div>
  )
}
