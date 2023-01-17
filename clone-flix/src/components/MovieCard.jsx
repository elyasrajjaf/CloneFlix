import { NavLink } from "react-router-dom";

export const MovieCard = ({ movieTrend }) => {
  const { title, original_name, backdrop_path } = movieTrend;

  return (
    <div className="w-full">
      <div className="py-3 min-w-full">
        <div className="bg-white shadow-lg rounded-3xl">
          <div className="h-auto p-3 flex items-center justify-start">
            <img
              className="rounded-3xl shadow-lg w-1/1"
              src={backdrop_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop_path}` : "https://i.pinimg.com/564x/45/17/26/451726bb0dda501f79d799b97d5308dc.jpg "}
              alt=""
            />
          </div>
          <div className="py-1 px-5">
            <h2 className="text-lg font-medium text-black text-center truncate hover:text-clip">
              {title ? title : original_name}
            </h2>
          </div>
          <div className="w-full py-3 px-5">
            <div className="bg-blue-500 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded-full">
              Voir plus
              {/* <NavLink to={`/movie/${id}`}>Voir plus...</NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*         
  TODO: composant <Movie />
*/
{
  /* 
<div>
  <div className="text-sm text-white">{release_date}</div>
  <div className="text-sm text-white">{overview}</div>
</div>
*/
}
