import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterActorsCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ people, name, action  }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedMovies = movies
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })


  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={name} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            actorFilter={nameFilter}
          />
        </Grid>
            <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
