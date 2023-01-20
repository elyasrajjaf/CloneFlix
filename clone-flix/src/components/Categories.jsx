// import { useState, useEffect, createContext } from "react";
// import axios from "axios";

// const CategoriesContext = createContext();

// const CategoriesProvider = ({children}) => {

//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         const trendingApi = async () => {
//             const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=a75e7e403b10ac94ebb9251b44696249&language=en-US&page=1`;

//             const { data } = await axios(url);

//             setCategories(data.results);
//         };
//         trendingApi();
//     }, [])

//     return(

//         <CategoriesContext.Provider
//             value={{
//                 categories
//             }}
//         >
//             {children}
//         </CategoriesContext.Provider>
//     )
// }

// export {
//     MoviesProvider
// }

// export default CategoriesContext;
