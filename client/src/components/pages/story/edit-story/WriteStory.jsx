import React, { useEffect, useState } from 'react';
import { Button, Container, styled, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGET, handleAPI } from '../../../../helpers/fetchRequests';
import Preview from './Preview';
import RichTextEditor from './RichTextEditor';
import Paragraph from '../Paragraph';
import { useContext } from 'react';
import { AuthorContext } from '../../../../context/AuthorContext';


const WriteStory = () => {
  const [userHtmlStr, setUserHtmlStr] = useState("");
  console.log("userHtmlStr from APP: ", userHtmlStr)
  const [storyObj, setStoryObj] = useState({});
  const [paragraphs, setParagraphs] = useState([]);
  const [currentAuthor] = useContext(AuthorContext);

  console.log("STORY: ", storyObj)
  console.log("Paragraphs: ", paragraphs)
  console.log("current author object from WriteStory: ", currentAuthor)

  const navigate = useNavigate();
  const location = useLocation()
  const url = `/stories/${location.state}`

  useEffect(() => {
    handleGET(url).then((story) => {
      setStoryObj(story)
      setParagraphs(story.paragraphs)
    })
  }, [url])

  const paragraphsList = paragraphs.map((para) => (
    <Paragraph 
      key={ para.id } 
      paragraphData={ para } 
      isAuthor={ 
        currentAuthor.name === para.author ? true : false 
      }
      updateUserHtml={ setUserHtmlStr }
      />
  ))

  const paragraphJson = {
    author_id: currentAuthor.id,
    rich_text_str: userHtmlStr
  }
  // console.log(paragraphJson)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParagraphURL = `/stories/${storyObj.id}/paragraphs`;
    handleAPI(newParagraphURL, "POST", paragraphJson)
    .then((res) => {
      if (res.ok) {
        res.json().then(console.log)
        // .then(navigate('/home'))
      } else {
        res.json().then(console.log)
      }
    });
  }


  // onEditParagraph => populate RTE with paragraph's contents, and make that paragraph view in its original card as the user types
  //    * change SubmitBtn to UpdateBtn that doesn't navigate away & sends fetch PATCH to /stories/:id/paragraphs/:id

  // onDeleteParagraph => popup "You sure?", confirm then update state & send fetch DELETE to stories/:id/paragraphs/:id


  return (
    <WriteStoryContainer>
      <StoryStats>
        <Typography variant="h4">Story Title: {storyObj.title}</Typography>
        <GenreAuthorNames>
          <Typography variant="h6">Genre: {storyObj.genre}</Typography>
          <Typography variant="h6">Your current Pen Name: {currentAuthor.name}</Typography>
        </GenreAuthorNames>
          <Button onClick={() => navigate('/home')} >Back to Dashboard</Button>
      </StoryStats>
      <ViewContainer>
        <Preview 
          paragraphs={ paragraphsList } 
          newJsxStr={ userHtmlStr } 
        />
        <RightView>
          <RichTextEditor 
            handleHtml={ setUserHtmlStr } 
          />
          <SubmitBtn 
            variant="contained"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </SubmitBtn>
        </RightView>
      </ViewContainer>
      
    </WriteStoryContainer>
  )
}

export default WriteStory

const WriteStoryContainer = styled(Container)({
  paddingTop: '80px',
  fontFamily: 'Kalam',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100vw',
  webkitScrollbar: {
	  width: '20'
  },
  webkitScrollbarTrack: {
  // "&::-webkit-scrollbar-track": {
	  backgroundColor: "orange"
  },
  webkitScrollbarThumb: {
	  backgroundColor: "red",
	  borderRadius: 2
  }
})

const StoryStats = styled(Container)({
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const GenreAuthorNames = styled(Container)({
  display: 'inherit',
  justifyContent: 'space-evenly',
})

const ViewContainer = styled(Container)({
  display: 'inherit',
  height: '70vh',
  border: '1px solid black'
})

// turn into formControl
const RightView = styled(Container)({
  
})

const SubmitBtn = styled(Button)({
  width: '100%',
  height: '60px',
})