import React, { useState, useRef } from 'react';
import { Box, Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, styled, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styledCategoryBox, styledTypography } from '../../../styles/home/storyControlPanelCss';

const sortType = 'category';

const Category = ({ categories, currentCategory, onSelectCategory }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleMenuItemClick = (e, index) => {
    onSelectCategory(e, sortType, categories[index]);
    setSelectedIndex(index);
    setOpen(false);
  };

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
      <StyledCategoryBox 
        ref={ anchorRef } 
        aria-label="category-selection"
      >
        <StyledTypography variant="h6">
          { currentCategory }
        </StyledTypography>
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
      </StyledCategoryBox>
      <Popper
        sx={{ zIndex: 10 }}
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
              <ClickAwayListener onClickAway={ handleClose }>
                <MenuList id="split-button-menu" autoFocusItem>
                  { categories.map((option, index) => (
                    <MenuItem
                      key={ option }
                      disabled={ index === 0 }
                      selected={ index === selectedIndex }
                      onClick={ (e) => handleMenuItemClick(e, index) }
                    >
                      { option }
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default Category;

const StyledCategoryBox = styled(Box)(styledCategoryBox);
const StyledTypography = styled(Typography)(styledTypography);