import { Button, Container, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGET } from '../../../helpers/fetchRequests';
import { detailsCss, genreCss, paragraphBoxCss, titleViewCss, viewContainerCss, viewNavCss } from '../../../styles/story/storyCss';
import Paragraph from './Paragraph'

const ViewStory = () => {
  const [storyObj, setStoryObj] = useState({});
  const [paragraphs, setParagraphs] = useState([]);
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
        <Button onClick={ () => navigate('/home') }>
          Go Back to Dashboard
        </Button>
      </ViewNav>
    </ViewContainer>
  )
}

export default ViewStory


const ViewContainer = styled(Container)(viewContainerCss);
const Details = styled(Container)(detailsCss);
const ParagraphBox = styled(Container)(paragraphBoxCss);
const Title = styled(Typography)(titleViewCss);
const Genre = styled(Typography)(genreCss);
const ViewNav = styled(Container)(viewNavCss);
