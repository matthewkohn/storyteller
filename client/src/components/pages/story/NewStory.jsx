import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, styled, Typography } from '@mui/material';
import { AuthorContext } from '../../../context/AuthorContext';
import { GenreContext } from '../../../context/GenreContext';
import { handleAPI } from '../../../helpers/fetchRequests';
import NewStoryForm from '../../forms/NewStoryForm';
import { newStoryContainerCss, newStoryTitleCss } from '../../../styles/story/storyCss';

const NewStory = () => {
  const { chosenGenre } = useContext(GenreContext);
  const { currentAuthor } = useContext(AuthorContext);
  const [formData, setFormData] = useState({
    genre_id: chosenGenre,
    title: "",
    author_id: 1,
    rich_text_str: ""
  })
  const navigate = useNavigate();
  const newStoryUrl = `/stories/new-story`
  console.log("Current author: ", currentAuthor)


const handleSubmit = (e) => {
    e.preventDefault();
    handleAPI(newStoryUrl, "POST", formData)
    .then((res) => {
      if (res.ok) {
        res.json().then((story) => console.log("New Story response: ", story))
        .then(() => navigate('/home'))
      } else {
        console.log("Bad fetch request. The new story was not saved. Please contact server admin and try again.")
      }
    })
  }


  return (
    <NewStoryContainer>
      <NewStoryTitle variant="h2">New Story</NewStoryTitle>
      <NewStoryForm 
        updateStory={ setFormData }
        storyInput={ formData }
        onSubmit={ handleSubmit }
      />
    </NewStoryContainer>
  )
}

export default NewStory

const NewStoryContainer = styled(Container)(newStoryContainerCss);
const NewStoryTitle = styled(Typography)(newStoryTitleCss);