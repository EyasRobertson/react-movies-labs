
import ActorListPageTemplate from '../components/templateActorListPage'
import { getPopularPeople } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';



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

  return (
    <ActorListPageTemplate
      title='Popular Actors'
      people={popularActors}
      action={popularActors}
    />
  );

};
export default PopularPage;
