import React, { useState } from 'react'
import DropdownGenre from './DropdownGenre'

const defaultInput = {
  title: "",
  year: "",
  genre: "",
  poster: "",
  imdbLink: "",
  netflixOrHulu: "0",
  movie: true,
}

export default function AddNew() {
  const [input, setInput] = useState(defaultInput)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
  }

  return (
    <div>
      <h3>Add New Movie or Show</h3>
      <form>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={handleChange}
        />
        <br />
        <label>Year:</label>
        <br />
        <input
          type="text"
          name="year"
          value={input.year}
          onChange={handleChange}
        />
        <br />
        <label>Genre:</label>
        <br />
        <DropdownGenre
          name="genre"
          value={input.genre}
          onChange={handleChange}
        />
        <br />
        <label>Poster URL:</label>
        <br />
        <input
          type="text"
          name="poster"
          value={input.poster}
          onChange={handleChange}
        />
        <br />
        <label>IMDB Link:</label>
        <br />
        <input
          type="text"
          name="imdbLink"
          value={input.imdbLink}
          onChange={handleChange}
        />
        <br />
      </form>
    </div>
  )
}
