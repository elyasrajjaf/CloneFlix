import { NavLink } from "react-router-dom";
import MoviesContext from "../context/MoviesProvider";
import { useState, useEffect} from "react";
import useMovies from "../hooks/useMovies";

export const MovieCard = ({ movieTrend }) => {
  const { id, title, original_name, backdrop_path } = movieTrend;

  const { moviesGenres } = useMovies();

  const [genres, setGenres] = useState([]);

  useEffect(()=> {

      Object.entries(movieTrend).map(x => {
          if (x[0] === "genre_ids") {
              
              x[1].map(genreId => {
                  
                  moviesGenres.map(genre => {
                      if (genre.id === genreId) {
                          let x = genres;
                          x.push(genre.name);
                          let y = new Set([...x]);
                          let z = [...y];
                          setGenres([...z]);
                      }
                  })

              })
          }
      });

  }, [])

  return (
    <div className="w-64">
      <NavLink to={`/movie/${id}`}>
        <div className="py-3 min-w-full">
          <div>
            <div
            style={{position: "relative"}}
            className="h-auto p-3 flex items-center justify-center">
              {genres.length > 0 &&
                <div
                  style={{
                      position: "absolute",
                      padding: "1.2em",
                      top: "0",
                      left: "0",
                      width: "inherit",
                      flexWrap: "wrap",
                      display: "flex", 
                      gap: "0.6em",
                }}>
                  {genres.map(genre => 
                      <p 
                      style={{
                          width: "fit-content",
                          background: "rgb(100,116,139, 0.8)",
                          // background: 
                          //     genre === "Action" ?
                          //         "red"
                          //     :
                          //     genre === "Adventure" ?
                          //         "firebrick"
                          //     : 
                          //     genre === "Animation" ?
                          //         "purple"
                          //     :
                          //     genre === "Comedy" ?
                          //         "orange"
                          //     :
                          //     genre === "Crime" ?
                          //         "midnightblue"
                          //     :
                          //     genre === "Documentary" ?
                          //         "mediumaquamarine"
                          //     :
                          //     genre === "Drama" ?
                          //         "darkblue"
                          //     :
                          //     genre === "Family" ?
                          //         "magenta"
                          //     :
                          //     genre === "Fantasy" ?
                          //         "darkgreen"
                          //     :
                          //     genre === "History" ?
                          //         "peru"
                          //     :
                          //     genre === "Horror" ?
                          //         "darkred"
                          //     :
                          //     genre === "Music" ?
                          //         "hotpink"
                          //     :
                          //     genre === "Mystery" ?
                          //         "darkcyan"
                          //     :
                          //     genre === "Romance" ?
                          //         "slateblue"
                          //     :
                          //     genre === "Science Fiction" ?
                          //         "royalblue"
                          //     :
                          //     genre === "TV Movie" ?
                          //         "mediumseagreen"
                          //     :
                          //     genre === "Thriller" ?
                          //         "indigo"
                          //     :
                          //     genre === "War" ?
                          //         "darkolivegreen"
                          //     :
                          //     genre === "Western" ?
                          //         "brown"
                          //     :
                          //         "black",
                          color: "white",
                          fontWeight: "bold",
                          padding: "0.2em 1em",
                          textAlign: "center",
                      }}
                      key={genre}>
                      {genre}
                      </p>
                  )}
                  {/*  
                    background: `RGBA(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.8)`,
                    border: `1px solid rgb(${Math.random()},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`,
                  */}
                </div>
              }
              <img
                className="w-full"
                src={
                  backdrop_path
                    ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`
                    : "https://i.pinimg.com/564x/45/17/26/451726bb0dda501f79d799b97d5308dc.jpg"
                }
                alt={title ? title : original_title}
              />
            </div>
            <div className="py-1 px-5 mx-5 bg-slate-500">
              <h2 className="text-lg font-medium text-white text-center truncate hover:text-clip">
                {title ? title : original_title}
              </h2>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

{
  /* 
<div>
  <div className="text-sm text-white">{release_date}</div>
  <div className="text-sm text-white">{overview}</div>
</div>
*/
}
