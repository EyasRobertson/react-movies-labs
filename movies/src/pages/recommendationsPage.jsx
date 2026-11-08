
import PageTemplate from '../components/templateMovieListPage'
import { getMovieRecommendations } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchListIcon from '../components/cardIcons/addToWatchList';

const RecommendedPage = (props) => {
	const { id } = useParams();
	console.log(id)
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['recs',{id: id}],
    queryFn: getMovieRecommendations,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const recommended = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = recommended.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 
  
  const watchList = recommended.filter(m => m.watch)
  localStorage.setItem('watchList', JSON.stringify(watchList))
  const addToWatchList = (movieId) => true 

  return (
    <PageTemplate
      title='Recommendations'
      movies={recommended}
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
export default RecommendedPage;
