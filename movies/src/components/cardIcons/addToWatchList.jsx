import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const AddToWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = (e) => {
    e.preventDefault();
    context.addToWatchList(movie);
  };

  return (
    <IconButton aria-label="add to watch list" onClick={handleAddToWatchList}>
      <VisibilityOutlinedIcon style={{color:"rgb(80,175,80)"}} fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchListIcon;
