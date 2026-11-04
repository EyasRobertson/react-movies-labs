
import PageTemplate from '../components/templateMovieListPage'
import { getPopularPeople } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const PopularPage = (props) => {
	
  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['popular'],
    queryFn: getPopularPeople,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const popularActors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = popularActors.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title='Popular Actors'
      movies={popularActors}
      action={(popularActors) => {
          return <AddToFavoritesIcon movie={popularActors} />
        }}
    />
  );

};
export default PopularPage;

//this is v basic and not yet tailored to actors, using movies template