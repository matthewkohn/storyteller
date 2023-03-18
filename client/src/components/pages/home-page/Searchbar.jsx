import React from 'react';
import { TextField } from '@mui/material';

const searchType = 'title-search';

const Searchbar = ({ currentInputValue, onSearchInputChange }) => {

  return (
    <>
      <TextField
        label="Search stories by title"
        size="small"
        value={ currentInputValue }
        onChange={ (e) => onSearchInputChange(e, searchType) }
      />
    </>
  )
}

export default Searchbar


/*

      case 'title-search':
        // if (e.target.value === '') {
        //   onUpdateStories(previousStories)
        // 

        // if (current.genre !== genres[0]) {
        //   const bookshelfCopy = [...bookshelfStories];
        //   handleInputChange(e, bookshelfCopy);
        // } else {
          handleInputChange(e, previousStories);
        // }
        break;

  const handleSearch = (stories, input) => {
    return stories.filter((story) => story.title.toLowerCase().includes(input));
  }

  const handleInputChange = (e, stories) => {
    const input = e.target.value.toLowerCase();
    setCurrent({ ...current, inputValue: input });
    // if not "All Genres", filterByGenre(value)
    //    {id: 0, name: 'All Genres'}
    // if (current.genre === {} || current.genre.name === 'All Genres') {
      //      const updatedStories = stories.filter((story) => story.title.toLowerCase().includes(input));
//            onUpdateStories(updatedStories);
//     }
    // otherwise, search allStories
    // if (current.inputValue !== '') {
      const updatedStories = handleSearch(stories, input);
      onUpdateStories(updatedStories);
    // } else {
      // 
    // }
  }
import Searchbar from './Searchbar';
        <Searchbar 
          currentInputValue={ current.inputValue }
          onSearchInputChange={ updateBookshelf }
        />

  */


