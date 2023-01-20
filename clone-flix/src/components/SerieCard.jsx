import { NavLink } from "react-router-dom";
import MoviesContext from "../context/MoviesProvider";
import { useState, useEffect} from "react";
import useMovies from "../hooks/useMovies";

export const SerieCard = ({ serieTrend }) => {
    const { id, title, original_name, backdrop_path, genres_ids} = serieTrend;

    const { seriesGenres } = useMovies();

    const [genres, setGenres] = useState([]);

    useEffect(()=> {

        Object.entries(serieTrend).map(x => {
            if (x[0] === "genre_ids") {
                
                x[1].map(genreId => {
                    
                    seriesGenres.map(genre => {
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
                            {/*  
                                background: `RGBA(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.8)`,
                                border: `1px solid rgb(${Math.random()},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`,
                            */}
                            {genres.map(genre => 
                                <p 
                                style={{
                                    width: "fit-content",
                                    // background: "rgba(200, 0, 0, 0.7)"
                                    background:
                                        genre === "Action & Adventure" ?
                                            "red"
                                        :
                                        genre === "Animation" ?
                                            "purple"
                                        :
                                        genre === "Comedy" ?
                                            "orange"
                                        :
                                        genre === "Crime" ?
                                            "midnightblue"
                                        :
                                        genre === "Documentary" ?
                                            "mediumaquamarine"
                                        :
                                        genre === "Drama" ?
                                            "darkblue"
                                        :
                                        genre === "Family" ?
                                            "magenta"
                                        :
                                        genre === "Kids" ?
                                            "forestgreen"
                                        :
                                        genre === "Mystery" ?
                                            "darkcyan"
                                        :
                                        genre === "News" ?
                                        "red"
                                        :
                                        genre === "Reality" ?
                                            "darkslategrey"
                                        :
                                        genre === "Soap" ?
                                            "darkorchid"
                                        :
                                        genre === "Sci-Fi & Fantasy" ?
                                            "royalblue"
                                        :
                                        genre === "Talk" ?
                                            "mediumseagreen"
                                        :
                                        genre === "War & Politics" ?
                                            "darkolivegreen"
                                        :
                                        genre === "Western" ?
                                            "brown"
                                        :
                                            "black",
                                    color: "white",
                                    fontWeight: "bold",
                                    padding: "0.2em 1em",
                                    textAlign: "center",
                                }}
                                key={genre}>
                                {genre}
                                </p>
                            )}
                        </div>
                        }
                        <img
                            className="w-full"
                            src={backdrop_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop_path}` : "https://i.pinimg.com/564x/45/17/26/451726bb0dda501f79d799b97d5308dc.jpg "}
                            alt=""
                        />
                    </div>
                    <div className="py-1 px-5 mx-5 bg-slate-500">
                        <h2 className="text-lg font-medium text-white text-center truncate hover:text-clip">
                            <NavLink to={`/serie/${id}`}>{title ? title : original_name}</NavLink>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
