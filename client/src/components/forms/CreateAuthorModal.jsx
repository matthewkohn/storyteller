import React, { useState } from 'react';
import { Backdrop, Box, Modal, Fade, FormControl, Button, TextField } from '@mui/material';
import { handleAPI } from '../../helpers/fetchRequests';

function CreateAuthorModal({ authors, onNewAuthor, updateAuthors }) {
  const [open, setOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const authorURL = '/authors';
  
  const handleCreate = (e) => {
    console.log("CLICK!")
    e.preventDefault()
    if (newAuthor !== "") {
      handleAPI(authorURL, "POST", { name: newAuthor })
      .then((res) => {
        if (res.ok) {
          res.json().then((a) => {
            updateAuthors([ ...authors, a]);
            onNewAuthor(a);
            setNewAuthor("");
            handleClose();
          });
        } else {
          console.log("Problem connecting, new author failed. Please try again.")
        }
      })
    }
  }

  const handleNewAuthorInput = (e) => {
    setNewAuthor(e.target.value)
  }

  return (
    <div>
      <Button onClick={ handleOpen }>Create New Pen Name</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ open }
        onClose={ handleClose }
        onKeyDown={ (e) => e.stopPropagation() }
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={ Backdrop }
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={ open } >
          <Box component="form" id="new-author-form" sx={ style }>
            <FormControl>
              <TextField
                autoFocus
                label="Create New Pen Name"
                value={ newAuthor }
                onChange={ (e) => handleNewAuthorInput(e) }
              />
              <Button 
                variant="contained"
                onClick={ (e) => handleCreate(e) }
                type="submit" 
                form="new-author-form"
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

export default CreateAuthorModal;

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