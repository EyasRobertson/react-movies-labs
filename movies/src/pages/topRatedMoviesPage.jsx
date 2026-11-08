
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchListIcon from '../components/cardIcons/addToWatchList';

const TopRatedPage = (props) => {
	
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['toprated'],
    queryFn: getTopRatedMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const topRatedMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = topRatedMovies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 
  const watchList = topRatedMovies.filter(m => m.watch)
  localStorage.setItem('watchList', JSON.stringify(watchList))
  const addToWatchList = (movieId) => true 

  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={topRatedMovies}
      action={(movie) => {
          return (
		  <>
		  <AddToFavoritesIcon movie={movie} />
		  <AddToWatchListIcon movie={movie} />
		  </>
		  );
        }}
    />
  );

};
export default TopRatedPage;
