import { Button, Container, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGET } from '../../../helpers/fetchRequests';
import { detailsCss, genreCss, paragraphBoxCss, prettyBoxCss, titleViewCss, viewContainerCss, backNavCss, viewNavCss } from '../../../styles/story/storyCss';
import Paragraph from './Paragraph'

const ViewStory = () => {
  const [storyObj, setStoryObj] = useState({});
  const [paragraphs, setParagraphs] = useState([]);
  const [view, setView] = useState('pretty');
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
      view={ view }
    />
  ))

  return (
    <ViewContainer>
      <Details>
        <Title variant="h2">Story Title: { storyObj.title }</Title>
        <Genre variant="h3">Genre: { storyObj.genre }</Genre>
      </Details>
      { view === 'block'
        ?
        <ParagraphBox>
          { paragraphsList }
        </ParagraphBox>
        :
        <ParagraphPrettyBox>
          { paragraphsList }
        </ParagraphPrettyBox>
      }
      <BackNav>
        <Button onClick={ () => navigate('/home') }>
          Go Back to Dashboard
        </Button>
      </BackNav>
      <ViewNav>
        <Button onClick={ () => setView('block') }>
          Block
        </Button>
        <Button onClick={ () => setView('pretty') }>
          Pretty
        </Button>
      </ViewNav>
    </ViewContainer>
  )
}

export default ViewStory


const ViewContainer = styled(Container)(viewContainerCss);
const Details = styled(Container)(detailsCss);
const ParagraphBox = styled(Container)(paragraphBoxCss);
const ParagraphPrettyBox = styled(Container)(prettyBoxCss);
const Title = styled(Typography)(titleViewCss);
const Genre = styled(Typography)(genreCss);
const BackNav = styled(Container)(backNavCss);
const ViewNav = styled(Container)(viewNavCss);