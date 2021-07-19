import React, { useState } from 'react'
// import DropdownGenre from './DropdownGenre'
import { URL, headers } from "../services"
import axios from 'axios'
import Popup from './Popup'
import { useHistory } from 'react-router-dom'

const defaultInput = {
  title: "",
  year: "",
  genre: "",
  poster: "",
  imdbLink: "",
  netflixOrHulu: null,
  movie: "",
}

export default function AddNew() {
  const [input, setInput] = useState(defaultInput)
  const [popup, setPopup] = useState(false)
  const [message, setMessage] = useState("")
  const history = useHistory()

  const togglePopup = () => {
    setPopup(!popup)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
    console.log(input)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input.title === "") {
      setMessage("Please enter a title to submit.")
      togglePopup()
    } else if (input.year === "") {
      setMessage("Please enter a year to submit.")
      togglePopup()
    } else if (input.genre === "") {
      setMessage("Please select a genre to submit.")
      togglePopup()
    } else if (input.poster === "") {
      setMessage("Please enter a poster url to submit.")
      togglePopup()
    } else if (input.imdbLink === "") {
      setMessage("Please enter a link to IMDB to submit.")
      togglePopup()
    } else if (input.netflixOrHulu === null) {
      setMessage("Please select streaming availability to submit.")
      togglePopup()
    } else if (input.movie === "") {
      setMessage("Please select either movie or show to submit.")
      togglePopup()
    } else {
      const res = await axios.post(URL, { fields: input }, { headers })
      console.log(res)
      history.push("/")
    }

  }

  return (
    <div>
      <h3>Add New Movie or Show</h3>
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <br />
        <div className="checkboxes">
          <label>Movie</label>
          <input type="checkbox" name="movie" value="true" onChange={handleChange} />
          <label>Show</label>
          <input type="checkbox" name="movie" value="false" onChange={handleChange} />
        </div>

        <br />
        {/* <label>Title:</label> */}
        <br />
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <br />
        {/* <label>Year:</label> */}
        <br />
        <input
          type="text"
          name="year"
          value={input.year}
          onChange={handleChange}
          placeholder="Year"
        />
        <br />
        {/* <label>Genre:</label> */}
        <br />
        <select
          type="text"
          name="genre"
          // value="genre"
          defaultValue=""
          onChange={handleChange}
          placeholder="genre"
        >
          <option value='' disabled >Genre</option>
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
        <br />
        {/* <label>Poster URL:</label> */}
        <br />
        <input
          type="text"
          name="poster"
          value={input.poster}
          onChange={handleChange}
          placeholder="Poster url"
        />
        <br />
        {/* <label>IMDB Link:</label> */}
        <br />
        <input
          type="text"
          name="imdbLink"
          value={input.imdbLink}
          onChange={handleChange}
          placeholder="IMDB Link"
        />
        <br />
        <label>Available for Streaming on:</label>
        <br />
        <div className="checkboxes">
          <label>Netflix</label>
          <input type="checkbox" name="netflixOrHulu" value={1} onChange={handleChange} />
          <label>Hulu</label>
          <input type="checkbox" name="netflixOrHulu" value={2} onChange={handleChange} />
          <label>Niether</label>
          <input type="checkbox" name="netflixOrHulu" value={0} onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Add</button>
      </form>
      {popup && <Popup message={<p>{message}</p>} closePopup={togglePopup} />}
    </div>
  )
}
