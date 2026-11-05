
import PageTemplate from '../components/templateMovieListPage'
import { getNowPlayingMovies } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


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

  return (
    <PageTemplate
      title='Now Playing Movies'
      movies={nowPlayingMovies}
      action={(nowPlayingMovies) => {
          return <AddToFavoritesIcon movie={nowPlayingMovies} />
        }}
    />
  );

};
export default NowPlayingPage;
