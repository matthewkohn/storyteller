import React, { useState } from 'react';
import Preview from './Preview';
import RichTextEditor from './RichTextEditor';
import { Container, styled } from '@mui/material';

const WriterContainer = () => {
  const [htmlStr, setHtmlStr] = useState("")
  console.log("htmlStr from APP: ", htmlStr)


  // RTE box
  // Preview box
  // This is where the user creates a contribution to a chosen/new story

  return (
    <StoryWriterContainer>
      
      <RichTextEditor handleHtml={ setHtmlStr } />
      <Preview jsx={ htmlStr } />
    </StoryWriterContainer>
  )
}

export default WriterContainer

const StoryWriterContainer = styled(Container)({
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