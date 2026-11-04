import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
 /** const [favorites, setFavorites] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };


  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };
**/
  return (
    <ActorsContext.Provider
      value={{
//MAYBE MAKE A FAVOURITE ACTORS THING 
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;



//THIS DOES NOT DO ANYTHING RIGHT NOW AS THERE IS NO CONTEXT TO BE SAVED FOR ACTORS.