import React, { useEffect, useState } from 'react';
import Preview from './Preview';
import RichTextEditor from './RichTextEditor';
import { Button, Container, styled } from '@mui/material';
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

  // const fixBreakLine = () => {

  // }


  return (
    <WriteStoryContainer>
      <RichTextEditor handleHtml={ setHtmlStr } />
      <Preview jsx={ htmlStr } />
      <Button onClick={() => navigate('/home')} >Back to Dashboard</Button>
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