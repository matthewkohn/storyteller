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
  myStories: `/stories-by-user`
}

const StoryControlPanel = ({ 
  allStories,
  bookshelfStories,
  onUpdateStories,
  onUpdateUrl
}) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({}); 
  
  const getGenres = () => {
    handleGET('/genres').then((data) => {
      data.unshift({id: 0, name: 'All Genres'});
      setGenres(data);
      setSelectedGenre(data[0]);
    });
  };

  useEffect(() => {
    getGenres();
  }, []);

  const updateBookshelf = (e, type, value) => {

    console.log(e.target.value, value)
    switch(type) {
      case 'category':
        if (value !== 'All Stories') {
          onUpdateUrl(urls.myStories);
          setSelectedGenre(genres[0]);
        } else {
          onUpdateUrl(urls.allStories);
          setSelectedGenre(genres[0]);
        }
        break;
      case 'genre':
        if (value.name === "All Genres") {
          onUpdateStories(allStories);
          setSelectedGenre(genres[0]);
        } else {
          const filteredStories = allStories.filter((story) => story.genre_category === value.name);
          onUpdateStories(filteredStories);
          setSelectedGenre(value);
        }
        break;
      case 'alpha-sort':
  
        break;
      case 'title-search':
    
        break;
      default:
      
        return;
    }
  };


  
  const handleReset = () => {
    onUpdateStories(allStories);
    onUpdateUrl(urls.allStories);
    setSelectedGenre(genres[0]);
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