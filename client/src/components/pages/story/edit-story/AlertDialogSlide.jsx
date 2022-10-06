import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText,  DialogTitle, IconButton, Slide, styled } from '@mui/material';
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
      <StyledDialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth='sm'
        onClose={handleDisagree}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <ContentText id="alert-dialog-slide-description">
            Deleting this paragraph is permanent, and may mess up the story. It's up to you.

          </ContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>Cancel</Button>
          <Button onClick={handleAgree}>Yes!</Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}


const StyledDialog = styled(Dialog)({
  // textAlign: 'center',
})

const ContentText = styled(DialogContentText)({
  fontSize: '24px',
})