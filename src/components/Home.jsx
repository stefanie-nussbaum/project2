import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { URL, headers } from '../services'
import MediaCard from './MediaCard'
import Loading from './Loading'


export default function Home() {
  const [multimedia, setMultimedia] = useState([])
  const [filteredMedia, setFilteredMedia] = useState([])
  const [filterInput, setFilterInput] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(URL, { headers })
      setMultimedia(res.data.records)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setFilteredMedia(multimedia)
  }, [multimedia])

  useEffect(() => {
    if (filterInput !== "") {
      setFilteredMedia(multimedia.filter((media) => {
        if (media.fields.genre === filterInput) {
          return media
        }
        return null
      }))
    } else {
      setFilteredMedia(multimedia)
    }
  }, [filterInput, multimedia])

  const handleChange = (e) => {
    setFilterInput(e.target.value)
  }

  if (multimedia.length === 0) {
    return <Loading />
  }

  return (
    <div>
      <h2>Watchlist</h2>
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
        {filteredMedia.map(media => {
          return (
            <div key={media.id} className="container">
              <MediaCard key={media.id} media={media} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
