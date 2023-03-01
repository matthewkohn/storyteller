import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GenreContext } from '../../../context/GenreContext';
import { UserContext } from '../../../context/UserContext';
import StoryControlPanel from './StoryControlPanel';
import StoryCard from './StoryCard';
import { newStoryBtnCss, storiesBoxCss, storiesHeaderCss, storyCardContainerCss, storyTitleCss, noStoriesTextCss } from '../../../styles/home/mainCss';

const HomePage = () => {
  const [isGenreChecked, setIsGenreChecked] = useState(false);
  const [isSortedByAll, setIsSortedByAll] = useState(true);
  const [radioValue, setRadioValue] = useState('all');
  const [allStories, setAllStories] = useState([]);
  const [noStories, setNoStories] = useState(false);
  const [url, setUrl] = useState('/stories');
  const [expanded, setExpanded] = useState(null);
  const { chosenGenre } = useContext(GenreContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  
/*
1. STORYTELLER logo and logout icon on top corners with transparent header
2. BOOKSHELF taking up most of left side of screen
    a. Title and sort icon on top corners with darker header
        i. SORT icon click opens SortBox modal (currently /src/components/pages/home/StoryControlPanel)
        ii. see SORTBOX_MODAL below
    b. Typography with dynamic mention of stories and genres/search results stacked below
    c. Welcome message, new-story button, and search TextArea with "title" and "author" radio buttons adjacent
        o. NEW_STORY button click => navigates to new story form/page
        i. SEARCH text dynamically filters Bookshelf either by title (default) or by author name
        ii. radio button controls the "method" passed to the filter function, re-rendering when searching and displaying in Bookshelf
        iii. every keystroke filters the BookShelf STORYLIST data, re-rendering onChange()
        iv. need one function to handleChange that filters STORYLIST based on textArea e.target.value, as well as method of "title" or "author".
        v. 

## HomePage
* top-level state: 
    allStories (immutable after fetch onPageLoad)
    filteredStories (this is what passes to JSX, === allStories onPageLoad, setFilteredStories is used throughout user interface changes)
    useFilterStory hook ({ isUserSelected, searchValue, searchMethod, currentGenre })
    isDisabledStory? (if user is previous author, they aren't allowed to contribute)

## Components
  1. HomePage
      * Header (title, logoutBtn)
      * Bookshelf
          BookshelfHeader with title & dynamic details ("{all} stories {all} genres") 
          storyList (map of story accordion components)
          * Story
              when clicked, story expands and shows details & Read/Contribute buttons.
              only one story can be expanded at a time. re-clicking closes accordion.
      * Greeting (message with NewStoryBtn ???)
      * Search 
          uses the useFilterStory hook, updating Bookshelf. text field with radio buttons.
      * Sort 
          uses the useFilterStory hook, updating Bookshelf. 
          Reacts to button click either ALL or USER toggle, as well as genre dropdown or alphabetical (+/- reversible) button
      * Reset button
      * New Story button??

## useFilterStory hook
1. isUserSelected
  handleAllOrUserStories(e)
  default(false) === ALL stories are displayed in Bookshelf
  if user toggles MY_STORIES button, stories filtered by username are displayed in Bookshelf
  if user toggles back to ALL button, ALL stories are displayed in Bookshelf

2. searchValue
  handleSearchValue(e, method)
  default("")
  searches ALL or MY_STORIES based on e.target.value in the searchInput value
  clear button appears next to SEARCHBAR as well as in BookshelfHeader if e.target.value !== ""

3. searchMethod
  handleSearchValue(e, method)
  default("title") === search input filters by "title" method and displays matching titles in Bookshelf
  "author" toggle filters search input by any "author_name" in any story, displaying matching stories in Bookshelf and updating BookshelfHeader status
  choosing method only affects the onChange value updates to searchValue

4. currentGenre
  handleGenreChange(e)
  default("all")
  updates Bookshelf when user chooses new genre from dropdown


*/

  const handleChange = (e) => {
    const value = e.target.value;
    setRadioValue(value);
    if (value !== 'all') {
      setIsSortedByAll(false) 
    } else if (value === 'all') {
      setIsSortedByAll(true);
    }
  }

  const handleCheckbox = (e) => {
    setIsGenreChecked(e.target.checked)
  }

  // tracks button clicks & sets urls
  useEffect(() => {
    if (!isSortedByAll) {
      setUrl(`/stories-by-user`);
    } else if (isSortedByAll && isGenreChecked && chosenGenre.id) {
      setUrl(`/stories-by-genre/${chosenGenre.id}`);
    } else {
      setUrl(`/stories`);
    }
  }, [chosenGenre, isGenreChecked, isSortedByAll])

  // sets stories
  useEffect(() => {
    fetch(url).then((res) => {
      res.json().then((stories) => {
        if (stories.length > 0) {
          setNoStories(false);
          // console.log(stories)
          setAllStories(stories);
        } else {
          setNoStories(true);
        }
      })
    })
  }, [url])

  const handleExpand = (storyId) => {
    if (expanded !== storyId) {
      setExpanded(storyId);
    } else {
      setExpanded(null);
    }
  }

  const storyCardsList = allStories.map((story) => (
      <StoryCard 
        expanded={ expanded }
        handleExpand={ handleExpand }
        key={ story.id } 
        story={ story } 
      />
  ))

  return (
    <StoriesBox>
      <StoriesHeader>
        <Title>
          <Box>
            <Typography variant="h2">
              The Book Shelf
            </Typography>
            <Typography variant="subtitle">
              Hello, {user.username}! Choose a story to contribute to, or tell a brand new story.
            </Typography>
          </Box>
          <StoryControlPanel
            isDisabled={ !isGenreChecked || !isSortedByAll }
            isAllChecked={ isSortedByAll }
            onCheckboxClick={ handleCheckbox }
            onRadioChange={ handleChange }
            radioValue={ radioValue }
          />
        </Title>
        <NewStoryBtn 
          variant="contained"
          onClick={ () => navigate('/story/new') } 
        >
          Create a New Story
        </NewStoryBtn>
      </StoriesHeader>
      <StoryCardContainer>
        { noStories ? <NoStories variant="h2">No stories yet</NoStories> : storyCardsList }
      </StoryCardContainer>
    </StoriesBox>
  )
}

export default HomePage

const StoriesBox = styled(Box)(storiesBoxCss);
const StoriesHeader = styled(Container)(storiesHeaderCss);
const Title = styled(Box)(storyTitleCss);
const StoryCardContainer = styled(Container)(storyCardContainerCss);
const NewStoryBtn = styled(Button)(newStoryBtnCss);
const NoStories = styled(Typography)(noStoriesTextCss);