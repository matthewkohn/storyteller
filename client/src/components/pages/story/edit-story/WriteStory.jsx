import React, { useState } from 'react';
import Preview from './Preview';
import RichTextEditor from './RichTextEditor';
import { Button, Container, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// import { useLocation } from 'react-router-dom';

const WriteStory = () => {
  const [htmlStr, setHtmlStr] = useState("<p>TEST</p>")
  console.log("htmlStr from APP: ", htmlStr)
  const navigate = useNavigate();


  // const location = useLocation()
  // console.log("location from WriteStory: ", location.state, location)

  // const fixBreakLine = () => {

  // }


  return (
    <WriteStoryContainer>
      <RichTextEditor handleHtml={ setHtmlStr } />
      <Preview jsx={ htmlStr } />
      <Button onClick={() => navigate('/dashboard')} >Back to Dashboard</Button>
    </WriteStoryContainer>
  )
}

export default WriteStory

const WriteStoryContainer = styled(Container)({
  paddingTop: '100px',
  fontFamily: 'Kalam',
  display: 'flex',
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