import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { URL, headers } from "../services"

export default function Details() {
  const [media, setMedia] = useState({})
  const [streaming, setStreaming] = useState("")
  const { id } = useParams()

  useEffect(() => {
    const fetchMedia = async () => {
      const res = await axios.get(`${URL}/${id}`, { headers })
      // console.log(res)
      setMedia(res.data)
    }
    fetchMedia()
  }, [id])

  useEffect(() => {
    if (media.fields?.netflixOrHulu === 1) {
      setStreaming("Available on Netflix")
    } else if (media.fields?.netflixOrHulu === 2) {
      setStreaming("Available on Hulu")
    }
  }, [media])
  console.log(media)

  const handleDelete = async () => {
    const mediaURL = `${URL}/watchlist/${id}`
    const res = await axios.delete(mediaURL, { headers })
    // history.push("/")
  }


  return (
    <div className="container">
      <div className="card">
        <img src={media.fields?.poster} alt={media.fields?.title} />
        <h2>{media.fields?.title}</h2>
        <p>{media.fields?.year}</p>
        <p>{media.fields?.genre}</p>
        <p>{streaming}</p>
        <Link to={{ pathname: `${media.fields?.imdbLink}` }} target="_blank">
          <button>See More</button>
        </Link>
        <button onClick={handleDelete}>Remove from Watchlist</button>
      </div>
    </div>
  )
}
