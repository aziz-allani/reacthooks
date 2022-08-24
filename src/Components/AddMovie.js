import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Rating } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddMovie = ({movies, setmovies}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [addName, setAddName] = useState("");
  const [addUniverse, setAddUniverse] = useState("");
  const [addPictureURL, setAddPictureURL] = useState("");
  const [addRating, setRating] = useState("");

  const AddMovieFunction = (e) => {
    e.preventDefault();
    setmovies([
        ...movies,
        {
            id: Math.random(),
            name: addName,
            universe: addUniverse.toLocaleUpperCase(),
            pictureURL: addPictureURL,
            rating: addRating,
        }
    ])
    handleClose();
  }

  return (
    <div>
      <Button className="add_button" variant="contained" onClick={handleOpen}>
        Add a new movie
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new movie
          </Typography>
          <TextField
            name="name"
            label="movie's Name"
            variant="outlined"
            onChange={(e) => setAddName(e.target.value)}
            sx={{margin: "1rem 0 0.5rem"}}
            fullWidth
          />
          <TextField
            name="universe"
            label="movie's Universe"
            variant="outlined"
            onChange={(e) => setAddUniverse(e.target.value)}
            sx={{margin: "0.5rem 0"}}
            fullWidth
          />
          <TextField
            name="title"
            label="movie's Picture URL"
            variant="outlined"
            onChange={(e) => setAddPictureURL(e.target.value)}
            sx={{margin: "0.5rem 0 1rem"}}
            fullWidth
          />
          <Rating
            name="simple-controlled"
            value={addRating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Button
            className="modal-button-cancel"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="modal-button-add"
            variant="primary"
            onClick={AddMovieFunction}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddMovie;
