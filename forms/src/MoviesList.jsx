import React from 'react'

export default function MoviesList(props) {
	return (
		props.movies.map(movie => (
			<div key={movie._id}>
				<h1>{movie.title}</h1>
				<p>Directed by: {movie.director}</p>
				{/* if the IMDB rating is higher than 9 then display a omg cat */}
				{/* this way you can write an if statement in JSX */}
				{movie.IMDBRating > 9 && <p>đ</p>}
				{/* this is an if else statement in JSX */}
				{movie.hasOscars ? <p>Oscar Winner đ</p> : <p>No Oscar âšī¸</p>}
			</div>
		))
	)

}
