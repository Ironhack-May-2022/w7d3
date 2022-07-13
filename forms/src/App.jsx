import './App.css'
import { useState } from 'react'
import MoviesList from './MoviesList';
import { v4 as uuidv4 } from 'uuid';

const moviesData = [
  {
    "_id": "1ae23ef1",
    "title": "The Godfather",
    "director": "Francis Coppola",
    "hasOscars": true,
    "IMDBRating": 9.2
  },
  {
    "_id": "1ae23ef2",
    "title": "Star Wars",
    "director": "George Lucas",
    "hasOscars": true,
    "IMDBRating": 8.7
  },
  {
    "_id": "1ae23ef3",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "hasOscars": false,
    "IMDBRating": 9.3
  },
  {
    "_id": "1ae23ef4",
    "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "hasOscars": false,
    "IMDBRating": 8.0
  },
  {
    "_id": "1ae23ef5",
    "title": "Sharknado",
    "director": "Anthony C. Ferrante",
    "hasOscars": false,
    "IMDBRating": 5.2
  },
  {
    "_id": "1ae23ef6",
    "title": "Titanic",
    "director": "James Cameron",
    "hasOscars": true,
    "IMDBRating": 8.9
  }
]

function App() {

  const [movies, setmovies] = useState(moviesData);

  const [title, setTitle] = useState('');

  const [director, setDirector] = useState('')

  const [rating, setRating] = useState(0)

  const [hasOscars, setHasOscars] = useState(false)

  const addMovie = () => {
    // add the movie Interstellar to the list
    const newMovie = {
      _id: '1ae343224jkl',
      title: 'Interstellar',
      director: 'Christopher Nolan',
      hasOscars: true,
      IMDBRating: 8.6
    }
    setmovies([newMovie, ...movies])
    // const copy = movies.slice()
    // copy.push(newMovie)
    // setmovies(copy)
  }

  const handleSubmit = event => {
    // this function prevents the site from being refreshed
    event.preventDefault()
    // console.log(title)
    // create a movie object based on the values in the state
    const newMovie = {
      _id: uuidv4(),
      title,
      director,
      rating,
      hasOscars
    }
    console.log(newMovie)
    // add the new movie to the list
    setmovies([newMovie, ...movies])
    // reset the input fields
    setTitle('')
    setDirector('')
    setRating(0)
    setHasOscars(false)
  }

  const handleTitleChange = event => {
    // console.log('changed')
    // this get's us the value from the input field
    // console.log(event.target.value)
    // set the state of title
    setTitle(event.target.value)
  }

  const handleDirectorChange = event => {
    setDirector(event.target.value)
  }

  const handleRatingChange = event => {
    setRating(event.target.value)
  }

  const handleHasOscarsChange = event => {
    setHasOscars(event.target.checked)
  }
  console.log('render')
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={addMovie}>Add a movie</button> */}
        {/* {movies.map(movie => (
          <div key={movie._id}>
            <h3>{movie.title}</h3>
            <h5>{movie.director}</h5>
          </div>
        ))} */}

        {/* the react form does not have an action attribute nor a method */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Title: </label>
          {/* this is an example how to call setState directly in onChange */}
          <input type="text" value={title} onChange={function (e) { setTitle(e.target.value) }} />

          <label htmlFor="">Director: </label>
          <input type="text" value={director} onChange={handleDirectorChange} />

          <label htmlFor="">Rating: </label>
          <input type="number" value={rating} onChange={handleRatingChange} />

          <label htmlFor="">Has Oscars: </label>
          <input type="checkbox" checked={hasOscars} onChange={handleHasOscarsChange} />

          <button type="submit">Add this movie</button>
        </form>

        <MoviesList movies={movies} />
      </header>
    </div >
  )
}

export default App
