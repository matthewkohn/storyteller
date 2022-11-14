import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, styled, Typography } from '@mui/material';
import { GenreContext } from '../../../context/GenreContext';
// import { AuthorContext } from '../../../context/AuthorContext'
import { handleAPI } from '../../../helpers/fetchRequests';
import NewStoryForm from '../../forms/NewStoryForm';
import { newStoryContainerCss, newStoryBoxCss, newStoryTitleCss } from '../../../styles/story/storyCss';
import Authors from '../../forms/Authors';

const NewStory = () => {
  const [title, setTitle] = useState("");
  const [htmlStr, setHtmlStr] = useState("");
  const { chosenGenre } = useContext(GenreContext);
  // const { currentAuthor } = useContext(AuthorContext);
  const navigate = useNavigate();

  const storiesJson = {
    genre_id: chosenGenre.id,
    title: title
  }
  const paragraphJson = {
    // author_id: currentAuthor.id,
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
      <NewStoryTitle variant="h2">New Story</NewStoryTitle>
      <NewStoryBox>
        <Authors />
        <NewStoryForm 
          updateStory={ setHtmlStr }
          title={ title }
          updateTitle={ setTitle }
          genre={ chosenGenre.name }
          onPublish={ handleSubmit }
        />
      </NewStoryBox>
    </NewStoryContainer>
  )
}

export default NewStory

const NewStoryContainer = styled(Container)(newStoryContainerCss);
const NewStoryBox = styled(Box)(newStoryBoxCss)
const NewStoryTitle = styled(Typography)(newStoryTitleCss);