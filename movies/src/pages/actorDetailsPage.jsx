import React from "react";
import { useParams } from 'react-router';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorPage";
//import useMovie from "../hooks/useMovie"; redundant
import { getActor } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'



const ActorPage = (props) => {
  const { id } = useParams();
    const { data: person, error, isPending, isError  } = useQuery({
    queryKey: ['person', {id: id}],
    queryFn: getActor,
  })

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <ActorDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for details</p>
      )}
    </>
  );
};

export default ActorPage;
