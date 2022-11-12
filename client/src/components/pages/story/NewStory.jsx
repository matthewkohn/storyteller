import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, styled, Typography } from '@mui/material';
import { GenreContext } from '../../../context/GenreContext';
import { handleAPI } from '../../../helpers/fetchRequests';
import NewStoryForm from '../../forms/NewStoryForm';
import { newStoryContainerCss, newStoryIntroCss } from '../../../styles/story/storyCss';
import Authors from '../home/Authors';

const NewStory = () => {
  const [title, setTitle] = useState("");
  const [htmlStr, setHtmlStr] = useState("");
  const { chosenGenre } = useContext(GenreContext);
  const location = useLocation();
  const navigate = useNavigate();

  const storiesJson = {
    genre_id: chosenGenre.id,
    title: title
  }
  const paragraphJson = {
    author_id: location.state.id,
    rich_text_str: htmlStr
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStory = await handleAPI('/stories', "POST", storiesJson).then((res) => res.json());
    const newParagraphURL = `/stories/${newStory.id}/paragraphs`;
    await handleAPI(newParagraphURL, "POST", paragraphJson)
    .then((res) => {
      if (res.ok) {
        res.json().then(console.log).then(navigate('/home'))
      } else {
        res.json().then(console.log)
      }
    });
  }


  return (
    <NewStoryContainer>
      <NewStoryIntro variant="h4">This is a new story, authored by {location.state.name}.</NewStoryIntro>
      <Authors />
      <NewStoryForm 
        updateStory={ setHtmlStr }
        title={ title }
        updateTitle={ setTitle }
        genre={ chosenGenre.name }
        onPublish={ handleSubmit }
      />
    </NewStoryContainer>
  )
}

export default NewStory

const NewStoryContainer = styled(Container)(newStoryContainerCss);
const NewStoryIntro = styled(Typography)(newStoryIntroCss);
