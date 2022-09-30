import React, { useEffect, useState } from 'react';
import Preview from './Preview';
import RichTextEditor from './RichTextEditor';
import { Button, Container, styled, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGET } from '../../../../helpers/fetchRequests';


const WriteStory = () => {
  const [htmlStr, setHtmlStr] = useState("")
  console.log("htmlStr from APP: ", htmlStr)
  const [story, setStory] = useState({})
  console.log("STORY: ", story)

  const navigate = useNavigate();
  const location = useLocation()
  const url = `/stories/${location.state}`

  useEffect(() => {
    handleGET(url).then((s) => setStory(s))
  }, [url])


  return (
    <WriteStoryContainer>
      <Typography variant="h4">Title: {story.title}</Typography>
      <Typography variant="h4">Genre: {story.genre}</Typography>
      <ViewContainer>
        <Preview jsx={ htmlStr } />
        <RightView>
          <RichTextEditor handleHtml={ setHtmlStr } />
          <SubmitBtn 
            variant="contained"
            onClick={() => console.log("CLICK")}
          >
            Submit
          </SubmitBtn>
        </RightView>
      </ViewContainer>
      <Button onClick={() => navigate('/home')} >Back to Dashboard</Button>
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

const ViewContainer = styled(Container)({
  display: 'inherit',
  height: '70vh',
  border: '1px solid black'
})

const RightView = styled(Container)({
  
})

const SubmitBtn = styled(Button)({
  width: '100%',
  height: '60px',
})