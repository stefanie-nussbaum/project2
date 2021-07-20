import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { URL, headers } from "../services"
import Loading from './Loading'
import MediaCard from './MediaCard'

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [filterInput, setFilterInput] = useState("")

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(URL, { headers })
      res.data.records.sort(function (a, b) {
        if (a.fields.title < b.fields.title) return -1
        if (a.fields.title > b.fields.title) return 1
        return 0
      })
      setMovies(res.data.records.filter(movie => {
        if (movie.fields.movie === "true") {
          return movie
        }
        return null
      }))
    }
    fetchMovies()
  }, [])

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  useEffect(() => {
    if (filterInput !== "") {
      setFilteredMovies(movies.filter((movie) => {
        if (movie.fields.genre === filterInput) {
          return movie
        }
        return null
      }))
    } else {
      setFilteredMovies(movies)
    }
  }, [filterInput, movies])

  const handleChange = (e) => {
    setFilterInput(e.target.value)
  }

  if (movies.length === 0) {
    return <Loading />
  }

  return (
    <div>
      <h2>Movies</h2>
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
        {filteredMovies.map(movie => {
          return (
            <div key={movie.id} className="container">
              <MediaCard key={movie.id} media={movie} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
