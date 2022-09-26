import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, styled, Typography } from '@mui/material';
import { GenreContext } from '../../../../context/GenreContext';
import NewStoryForm from '../../../forms/NewStoryForm';

const NewStory = () => {
  const [title, setTitle] = useState("");
  const [htmlStr, setHtmlStr] = useState("");
  const { chosenGenre } = useContext(GenreContext);
  const location = useLocation();
  // console.log(location.state)

  const storiesJson = {
    genre_id: chosenGenre.id,
    title: title
  }
  const paragraphJson = {
    author_id: location.state.id,
    rich_text_str: htmlStr
  }
  console.log("Stories JSON: ", storiesJson)
  console.log("Paragraph JSON: ", paragraphJson)
  
  /*
  >>>>>  '/stories'
{
    "genre_id": 1,                  chosenGenre.id
    "title": "postman test2"
}

  >>>>>  '/stories/:storyId/paragraphs'
{
    "author_id":4,                  location.state.id
    "rich_text_str": "<h1>My name is a secret. Shhhh.</h1>"
}

  */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICK!")

  }


  return (
    <NewStoryContainer>
      <NewStoryIntro variant="h4">This is a new story, authored by {location.state.name}.</NewStoryIntro>
      
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

const NewStoryContainer = styled(Container)({
  paddingTop: '100px',
  maxHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

})

const NewStoryIntro = styled(Typography)({
  textAlign: 'center',
  padding: '10px',
})
