import { useEffect, useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { controlBoxCss } from '../../../styles/home/storyControlPanelCss';
import Category from './Category';
import Genres from '../../forms/Genres';
import Searchbar from './Searchbar';
import AlphaSortBtn from './AlphaSortBtn';
import { handleGET } from '../../../helpers/fetchRequests';

const urls = {
  allStories: `/stories`,
  myStories: `/stories-by-user`,
  genres: '/genres'
}

const StoryControlPanel = ({ 
  allStories,
  bookshelfStories,
  noStories,
  onUpdateStories,
  onUpdateUrl
}) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [isAlphabetized, setIsAlphabetized] = useState(false);
  const [previousStories, setPreviousStories] = useState(allStories);
  
  const getGenres = () => {
    handleGET(urls.genres).then((data) => {
      data.unshift({id: 0, name: 'All Genres'});
      setGenres(data);
      setSelectedGenre(data[0]);
    });
  };

  const alphabetize = (stories) => {
    return [...stories].sort((a, b) => {
      let titleA = a.title.toUpperCase();
      let titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }

  useEffect(() => {
    getGenres();
  }, []);

  const filterByGenre = (value) => {
    const filteredStories = allStories.filter((story) => story.genre_category === value.name);
    onUpdateStories(filteredStories);
    setSelectedGenre(value);
    setIsAlphabetized(false);
  }

  const updateBookshelf = (e, type, value) => {
    console.log(e.target.value, value)

    switch(type) {
      case 'category':
        setIsAlphabetized(false);
        if (value !== 'All Stories') {
          onUpdateUrl(urls.myStories);
          setSelectedGenre(genres[0]);
        } else {
          onUpdateUrl(urls.allStories);
          setSelectedGenre(genres[0]);
        }
        break;
      case 'genre':
        setIsAlphabetized(false);
        if (value.name === "All Genres") {
          onUpdateStories(allStories);
          setSelectedGenre(genres[0]);
        } else {
          filterByGenre(value)
        }
        break;
      case 'alpha-sort':
        if (noStories) {
          break;
        }
        if (isAlphabetized) {
          onUpdateStories(previousStories);
          setIsAlphabetized(!isAlphabetized);
        } else {
          const sortedStories = alphabetize(bookshelfStories);
          setPreviousStories(bookshelfStories);
          onUpdateStories(sortedStories);
          setIsAlphabetized(!isAlphabetized);
        }
        break;
      case 'title-search':
    
        break;
      default:
      
        return;
    }
  };

console.log("Bookshelf: ", bookshelfStories)
console.log("Previous: ", previousStories)
console.log("All: ", allStories)
console.log("Genre: ", selectedGenre)
  
  const handleReset = () => {
    // doesn't reset category
    onUpdateStories(allStories);
    onUpdateUrl(urls.allStories);
    setSelectedGenre(genres[0]);
    setIsAlphabetized(false);
  };

  return (
    <>
      <ControlBox elevation={3}>
        <Category 
          onSelectCategory={ updateBookshelf }
        />
        <Genres 
          currentGenre={ selectedGenre }
          genres={ genres }
          onSelectGenre={ updateBookshelf } 
        />
        <AlphaSortBtn 
          disabled={ noStories }
          isSorted={ isAlphabetized }
          onClickAlphaSort={ updateBookshelf } 
        />
        <Searchbar 

        />
        <Button 
          variant="outlined" 
          onClick={ handleReset }
        >
          Reset
        </Button>
      </ControlBox>
    </>
  )
}

export default StoryControlPanel


const ControlBox = styled(Box)(controlBoxCss);