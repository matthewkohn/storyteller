import { useEffect, useState } from 'react';
import { Typography, styled, Container } from '@mui/material';
import { noStoriesTextCss, storyCardContainerCss } from '../../../styles/homePageCss';
import StoryCard from './StoryCard';
import StoryControlPanel from './StoryControlPanel';

const Bookshelf = () => {
  const [expanded, setExpanded] = useState(null);
  const [bookshelfStories, setBookshelfStories] = useState([]);
  const [allStories, setAllStories] = useState([]);
  const [noStories, setNoStories] = useState(false);
  const [url, setUrl] = useState('/stories');

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

  
  useEffect(() => {
    fetch(url).then((res) => {
      res.json().then((stories) => {
        if (stories.length > 0) {
          setNoStories(false);
          setAllStories(stories);
          setBookshelfStories(stories);
        } else {
          setNoStories(true);
        }
      })
    })
  }, [url]);

  const handleUpdateStories = (stories) => {
    if (stories.length === 0) {
      setNoStories(true);
    } else {
      setNoStories(false);
      setBookshelfStories(stories);
    }
  };

  const handleUpdateUrl = (newUrl) => {
    setUrl(newUrl);
  };

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
        {/* <Typography variant="h3">BOOKSHELF</Typography> */}
        <StoryControlPanel
          allStories={ allStories }
          bookshelfStories={ bookshelfStories }
          noStories={ noStories }
          onUpdateStories={ handleUpdateStories }
          onUpdateUrl={ handleUpdateUrl }
        />
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