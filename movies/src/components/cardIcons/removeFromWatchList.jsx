import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchList = (e) => {
    e.preventDefault();
    context.removeFromWatchList(movie);
  };
  return (
    <IconButton
      aria-label="remove from watch list"
      onClick={handleRemoveFromWatchList}
    >
      <DeleteIcon style={{color:"rgb(135,25,25)"}} fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWatchListIcon;
