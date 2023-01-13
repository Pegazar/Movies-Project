import React, { useEffect, useState } from "react";
import "./ListPage.css";

function ListPage() {
  const [movies,setMovies] = useState({
    movies: [{ title: "The Godfather", year: 1972, imdbID: "tt0068646" }],
  });

  useEffect(() => {
    // const id = props.match.params;
    // console.log(id);
  });

  return (
    <div className="list-page">
      <h1 className="list-page__title">My List</h1>
      <ul>
        {movies.movies.map((item) => {
          return (
            <li key={item.imdbID}>
              <a to="https://www.imdb.com/title/tt0068646/">
                {item.title} ({item.year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListPage;

