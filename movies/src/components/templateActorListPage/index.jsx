import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ title, people, name, action  }) {
  const [nameFilter, setNameFilter] = useState("");

console.log(name);
console.log(title);
console.log(people);
  let displayedPeople = people
  .filter((a) => {
		return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
	
  });
console.log(displayedPeople)

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    //else setGenreFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
        </Grid>
		<ActorList action={action} people={displayedPeople}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;
