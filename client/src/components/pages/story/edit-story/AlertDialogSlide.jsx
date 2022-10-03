import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText,  DialogTitle, IconButton, Slide } from '@mui/material';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ id, onDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgree = () => {
    onDelete(id);
    setOpen(false);
  };

  const handleDisagree = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" onClick={ handleClickOpen }>
        <DeleteForeverIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDisagree}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you absolutely sure you want to delete this paragraph?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Deleting this is permanent, and may mess up the story. But it's your paragraph, so it's your choice.

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>Disagree</Button>
          <Button onClick={handleAgree}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
