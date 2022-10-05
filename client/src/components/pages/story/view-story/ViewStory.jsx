import { Button, Container, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGET } from '../../../../helpers/fetchRequests';
import Paragraph from '../Paragraph'

const ViewStory = () => {
  const [storyObj, setStoryObj] = useState({});
  const [paragraphs, setParagraphs] = useState([]);
console.log(storyObj)
  const location = useLocation();
  const navigate = useNavigate();
  const storyUrl = `/stories/${location.state}`;

  useEffect(() => {
    handleGET(storyUrl).then((story) => {
      setStoryObj(story);
      setParagraphs(story.paragraphs);
    })
  }, [storyUrl])

  const paragraphsList = paragraphs.map((para) => (
    <Paragraph 
      key={ para.id } 
      isAuthor={ false }
      paragraphData={ para } 
    />
  ))

  return (
    <ViewContainer>
      <Details>
        <Title variant="h2">Story Title: { storyObj.title }</Title>
        <Genre variant="h3">Genre: { storyObj.genre }</Genre>
      </Details>
      <ParagraphBox>
        { paragraphsList }
      </ParagraphBox>
      <ViewNav>
        <NavBtn onClick={ () => navigate('/home') }>
          Go Back to Dashboard
        </NavBtn>
      </ViewNav>
    </ViewContainer>
  )
}

export default ViewStory


const ViewContainer = styled(Container)({
  paddingTop: '80px',
  maxHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const Details = styled(Container)({
  width: '50%',
  textAlign: 'center',
  padding: '0 0 15px',
})

const ParagraphBox = styled(Container)({
  overflowY: 'scroll',
  width: '50%',
  height: '70vh',
})

const Title = styled(Typography)({
  fontSize: '40px',
})

const Genre = styled(Typography)({
  fontSize: '30px',
})

const ViewNav = styled(Container)({
  position: 'fixed',
  top: '100px',
  // right: '50px',
})

const NavBtn = styled(Button)({

})