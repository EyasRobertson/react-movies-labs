import React, { useState } from "react";
import Header from "../headerMovieList";//THIS MAY NEED CHANGED	
import FilterCard from "../filterMoviesCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ people, name, action  }) {
  const [nameFilter, setNameFilter] = useState("");

console.log(people);
  let displayedPeople = people
  .filter((a) => {
		return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });


  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    //else setGenreFilter(value);
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
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;
