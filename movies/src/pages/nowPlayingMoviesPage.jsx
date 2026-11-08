
import PageTemplate from '../components/templateMovieListPage'
import { getNowPlayingMovies } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchListIcon from '../components/cardIcons/addToWatchList';

const NowPlayingPage = (props) => {
	
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['nowplaying'],
    queryFn: getNowPlayingMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const nowPlayingMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = nowPlayingMovies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 
  
  const watchList = nowPlayingMovies.filter(m => m.watch)
  localStorage.setItem('watchList', JSON.stringify(watchList))
  const addToWatchList = (movieId) => true 

  return (
    <PageTemplate
      title='Now Playing Movies'
      movies={nowPlayingMovies}
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
export default NowPlayingPage;
