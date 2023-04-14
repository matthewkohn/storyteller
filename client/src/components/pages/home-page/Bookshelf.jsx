import { useState } from 'react';
import { Typography, styled, Container } from '@mui/material';
import { noStoriesTextCss, storyCardContainerCss } from '../../../styles/homePageCss';
import StoryCard from './StoryCard';

const Bookshelf = ({ bookshelfStories, noStories }) => {
  const [expanded, setExpanded] = useState(null);
  // const [isScrollbar, setIsScrollbar] = useState(false);
// console.log("is scrollbar visible?? ", isScrollbar)
  // useEffect(() => {
  //   console.log("documentBodyClientHeight: ", document.body.clientHeight)
  //   console.log("windowInnerHeight: ", window.innerHeight)
  //   if (document.body.clientHeight > window.innerHeight) {
  //     setIsScrollbar(false);
  //   } else {
  //     setIsScrollbar(true);
  //   }
  // }, [])

  const handleExpand = (storyId) => {
    if (expanded !== storyId) {
      setExpanded(storyId);
    } else {
      setExpanded(null);
    }
  };

  const storyCardsList = bookshelfStories.map((story) => (
    <StoryCard 
      expanded={ expanded }
      handleExpand={ handleExpand }
      key={ story.id } 
      story={ story } 
    />
  ))

  return (
    <>
        <Typography variant="h3">BOOKSHELF</Typography>
        <Typography variant="body1">All Stories, All Genres</Typography>
        { noStories ? 
          <NoStories variant="h2">No stories yet</NoStories> 
          : 
          <StoryCardContainer 
            // sx={{ overflowY: ` ${ isScrollbar ? 'scroll' : 'hidden'}`}}
          >
            { storyCardsList }
          </StoryCardContainer>
        } 
    </>
  )
}

export default Bookshelf

const StoryCardContainer = styled(Container)(storyCardContainerCss);
const NoStories = styled(Typography)(noStoriesTextCss);