import React, { useState } from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ title, people, name, action  }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedPeople = people
  .filter((a) => {
		return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>

		<ActorList action={action} people={displayedPeople}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;
