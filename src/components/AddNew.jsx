import React, { useState } from 'react'
import DropdownGenre from './DropdownGenre'
import { URL, headers } from "../services"
import axios from 'axios'

const defaultInput = {
  title: "",
  year: "",
  genre: null,
  poster: "",
  imdbLink: "",
  netflixOrHulu: "0",
  // movie: null,
}

export default function AddNew() {
  const [input, setInput] = useState(defaultInput)

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

    const res = await axios.post(URL, { fields: input }, { headers })
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
          value="genre"
          defaultValue="genre"
          onChange={handleChange}
          placeholder="genre"
        >
          <option value="genre" disabled >Genre</option>
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
          <input type="checkbox" name="netflixOrHulu" value="1" onChange={handleChange} />
          <label>Hulu</label>
          <input type="checkbox" name="netflixOrHulu" value="2" onChange={handleChange} />
          <label>Niether</label>
          <input type="checkbox" name="netflixOrHulu" value="0" onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
