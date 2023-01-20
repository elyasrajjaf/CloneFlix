import { NavLink } from "react-router-dom";

export const MovieCard = ({ movieTrend }) => {
  const { id, title, original_name, backdrop_path } = movieTrend;

  return (
    <div className="w-64">
      <div className="py-3 min-w-full">
        <div>
          <div className="h-auto p-3 flex items-center justify-center">
            <img
              className="w-full"
              src={backdrop_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop_path}` : "https://i.pinimg.com/564x/45/17/26/451726bb0dda501f79d799b97d5308dc.jpg"}
              alt=""
            />
          </div>
          <div className="py-1 px-5 mx-5 bg-slate-500">
            <h2 className="text-lg font-medium text-white text-center truncate hover:text-clip">
              <NavLink to={`/movie/${id}`}>{title ? title : original_name}</NavLink>
            </h2>
          </div>
        </div>
      </div>
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
