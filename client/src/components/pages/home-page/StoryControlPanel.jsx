import { useEffect, useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { controlBoxCss } from '../../../styles/home/storyControlPanelCss';
import Category from './Category';
import Genres from './Genres';
import AlphaSortBtn from './AlphaSortBtn';
import { handleGET } from '../../../helpers/fetchRequests';
import { alphabetize, categories, initialSortState, urls } from '../../../helpers/controlPanelData';

const StoryControlPanel = ({ 
  allStories,
  bookshelfStories,
  noStories,
  onUpdateStories,
  onUpdateUrl
}) => {
  const [current, setCurrent] = useState(initialSortState);
  const [genres, setGenres] = useState([]);
  const [previousStories, setPreviousStories] = useState([]);
  
  const getGenres = () => {
    handleGET(urls.genres).then((data) => {
      data.unshift({id: 0, name: 'All Genres'});
      setGenres(data);
      setCurrent({...current, genre: data[0]});
    });
  };

  const resetGenres = () => {
    setCurrent({ ...current, genre: genres[0] });
  };

  const resetIsAlphabetized = () => {
    setCurrent({ ...current, isAlphabetized: false });
  };

  const toggleIsAlphabetized = () => {
    setCurrent({ ...current, isAlphabetized: !current.isAlphabetized });
  };

  useEffect(() => {
    getGenres();
     // eslint-disable-next-line
  }, []);

  useEffect(() => setPreviousStories(allStories), [allStories]);

  const filterByGenre = (value) => {
    const filteredStories = allStories.filter((story) => story.genre_category === value.name);
    onUpdateStories(filteredStories);
    setCurrent({ ...current, genre: value, isAlphabetized: false });
  };

  const handleReset = () => {
    onUpdateUrl(urls.allStories);
    setCurrent({ ...initialSortState, genre: genres[0] });
  };

  const updateBookshelf = (e, type, value) => {
    switch(type) {
      case 'category':
        setPreviousStories(bookshelfStories);
        setCurrent({ category: value, genre: genres[0], isAlphabetized: false });
        if (value !== 'All Stories') {
          onUpdateUrl(urls.myStories);
        } else {
          onUpdateUrl(urls.allStories);
        }
        break;
      case 'genre':
        resetIsAlphabetized();
        if (value.name === 'All Genres') {
          onUpdateStories(allStories);
          resetGenres();
        } else {
          filterByGenre(value);
        }
        break;
      case 'alpha-sort':
        setPreviousStories(bookshelfStories);
        if (noStories) {
          break;
        }
        if (current.isAlphabetized) {
          onUpdateStories(previousStories);
          toggleIsAlphabetized();
        } else {
          const sortedStories = alphabetize(bookshelfStories);
          onUpdateStories(sortedStories);
          toggleIsAlphabetized();
        }
        break;
      default:
        return;
    }
  };

  return (
    <ControlBox elevation={3}>
      <Category 
        categories={ categories }
        currentCategory={ current.category }
        onSelectCategory={ updateBookshelf }
      />
      <Genres  
        currentGenre={ current.genre }
        genres={ genres }
        onSelectGenre={ updateBookshelf } 
      />
      <AlphaSortBtn 
        disabled={ noStories }
        isSorted={ current.isAlphabetized }
        onClickAlphaSort={ updateBookshelf } 
      />
      <Button variant="outlined" size="xs" onClick={ handleReset } >
        <RotateLeftIcon />
      </Button>
    </ControlBox>
  )
}

export default StoryControlPanel;

const ControlBox = styled(Box)(controlBoxCss);