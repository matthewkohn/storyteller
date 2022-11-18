import React, { useState } from 'react';
import { Backdrop, Box, Modal, Fade, FormControl, Button, TextField } from '@mui/material';
// import PublishIcon from '@mui/icons-material/Publish';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateAuthorModal({ onCreate, onInputChange, newAuthor }) {
  const [open, setOpen] = useState(false);
  // const [newAuthor, setNewAuthor] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate(e);
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Create a New Pen Name</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Choose a new Pen Name
            </Typography> */}
            <FormControl>
              <TextField
                autoFocus
                label="Create a New Pen Name"
                inputValue={ newAuthor }
                onChange={ (e) => onInputChange(e) }
              />
              <Button 
                variant="contained"
                onClick={(e) => handleSubmit(e) }
              >
                Create
              </Button>  
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}