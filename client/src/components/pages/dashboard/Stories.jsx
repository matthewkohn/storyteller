import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, styled, Typography } from '@mui/material';
import GenresDropdown from '../../forms/GenresDropdown';
import StoryCard from './StoryCard';

const Stories = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [radioValue, setRadioValue] = useState('all');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRadioValue(e.target.value);
    radioValue === 'all' ? setIsDisabled(false) : setIsDisabled(true)
  }

  // genre dropdown that displays filtered stories for that genre
  // maps all stories of a genre as a StoryCard (story title only)

  return (
    <StoriesBox>
      <StoriesHeader>
        <Typography variant="h4">Stories</Typography>
        <RadioFormControl>
          <RadioLabel variant="h6">View: </RadioLabel>
          <RadioGroup 
            row
            defafultvalue="all"
            value={ radioValue }
            onChange={ handleChange }
          >
            <FormControlLabel 
              value="all" 
              control={ <Radio /> } 
              label="All" 
            />
            <FormControlLabel 
              value="by-genre" 
              control={ <Radio /> } 
              label="By Genre" 
            />
          </RadioGroup>
          <GenresDropdown isDisabled={ isDisabled }/>
        </RadioFormControl>
      </StoriesHeader>
{/* story cards go here */}

      <StoryCard />
      <Button onClick={ () => navigate('/story/1/edit') } >Contribute</Button>
    </StoriesBox>
  )
}

export default Stories

const StoriesBox = styled(Box)({
  border: '1px solid green',
  padding: '20px',
  borderRadius: '15px',
  margin: '10px',
  width: '75vw',
  height: '65vh',
})

const StoriesHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
})

const RadioFormControl = styled(FormControl)({
  display: 'inherit',
  flexDirection: 'row',
})

const RadioLabel = styled(Typography)({
  display: 'inherit',
  alignItems: 'center',
  padding: '10px',
})