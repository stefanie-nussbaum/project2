import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL, headers } from "../services"

export default function Details() {
  const [media, setMedia] = useState({})
  const [streaming, setStreaming] = useState("")
  const { id } = useParams()

  useEffect(() => {
    const fetchMedia = async () => {
      const res = await axios.get(`${URL}/${id}`, { headers })
      console.log(res)
      setMedia(res.data)
      // if ({ media.fields.netflixOrHulu } == 1) {
      //   setStreaming("Available on Netflix")
      // } else if ({ media.fields.netflixOrHulu } == 2) {
      //   setStreaming("Available on Hulu")
      // }
    }
    fetchMedia()
  }, [id])



  return (
    <div>
      <img src={media.fields?.poster} />
      <h2>{media.fields?.title}</h2>
      <p>{media.fields?.year}</p>
      <p>{media.fields?.genre}</p>
      <p>{streaming}</p>
    </div>
  )
}
