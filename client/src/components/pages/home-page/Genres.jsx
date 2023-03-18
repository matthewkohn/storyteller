import React, { useRef, useState } from 'react';
import { Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, styled, Box, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styledCategoryBox, styledMenuList, styledTypography } from '../../../styles/home/storyControlPanelCss';

const sortType = 'genre';

const Genres = ({ currentGenre, genres, onSelectGenre }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleMenuItemClick = (e, index) => {
    onSelectGenre(e, sortType, genres[index]);
    setOpen(false);
  };

  const genresList = genres.map((genre, index) => (
    <MenuItem
      key={ genre.id }
      selected={ genre.id === currentGenre.id }
      onClick={ (e) => handleMenuItemClick(e, index) }
    >
      { genre.name }
    </MenuItem>
  ));

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <StyledGenresBox ref={ anchorRef } aria-label="genre-dropdown">
        <StyledTypography variant="h6">{ currentGenre.name }</StyledTypography>
        <Button
          size="small"
          variant="contained"
          aria-controls={ open ? 'split-button-menu' : undefined }
          aria-expanded={ open ? 'true' : undefined }
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={ handleToggle }
        >
          <ArrowDropDownIcon />
        </Button>
      </StyledGenresBox>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={ open }
        anchorEl={ anchorRef.current }
        role={ undefined }
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            { ...TransitionProps }
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <StyledMenuList id="split-button-menu" autoFocusItem>
                  { genresList }
                </StyledMenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default Genres;

const StyledGenresBox = styled(Box)(styledCategoryBox);
const StyledTypography = styled(Typography)(styledTypography);
const StyledMenuList = styled(MenuList)(styledMenuList);