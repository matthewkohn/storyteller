import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Card, Container, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { handleAPI, handleGET } from '../../../helpers/fetchRequests';
import { AuthorContext } from '../../../context/AuthorContext';
import AuthError from '../login/login-side/AuthError';
import NewAuthorForm from '../../forms/NewAuthorForm';
import { addAuthorCardCss, authorBtnCss, authorBtnListCss, authorsBoxCss, authorSubtitleCss, authorTitleCss, newStoryBtnCss } from '../../../styles/main/dashboardCss';

const Authors = () => {
  const [currentAuthor, setCurrentAuthor] = useContext(AuthorContext)
  const [authors, setAuthors] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newAuthor, setNewAuthor] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleGET('/authors')
    .then((data) => {
      setAuthors(data)
      setCurrentAuthor({ name: data[0].name, id: data[0].id })
    })
    // eslint-disable-next-line
  }, [])

  const authorsList = authors.map((author) => (
      <AuthorBtn 
        key={author.id}
        variant={ currentAuthor.name === author.name ? "contained" : "outlined" } 
        onClick={ () => onChooseCurrentAuthor(author) } 
        >
        <Typography variant="body2">{author.name}</Typography>
      </AuthorBtn>
  ))
  
  const onChooseCurrentAuthor = (author) => {
    setCurrentAuthor({ name: author.name, id: author.id })
  }
  
  const handleToggleForm = () => {
    setIsAdding(true)
  }

  const handleAddInput = (e) => {
    setNewAuthor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authors.length < 6) {
      handleAPI('/authors', "POST", { name: newAuthor })
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setAuthors([ ...authors, data ])
            setIsAdding(false)
            setCurrentAuthor({ name: data.name, id: data.id })
            setNewAuthor("")
          })
        } else {
          res.json().then((err) => {
            setErrors(err.errors);
            const timer = setTimeout(() => {
              setErrors([]);
            }, 5000);
            clearTimeout(timer);
            setNewAuthor("");
            setIsAdding(false);
          })
        }
      })
    } else {
      setIsAdding(false)
      setErrors(["Sorry, you already have 6 Pen Names"])
    }
  }


  return (
    <AuthorsBox>
      <Title variant="h2">Pen Names</Title>
      <SubTitle variant="subtitle">(Up to 6)</SubTitle>
      <BtnList>
        { authorsList }
      </BtnList>
      { errors.map((err) => <AuthError key={ err } clearMessage={ setErrors }>{ err }</AuthError>) }

      <NewStoryBtn 
        variant="contained"
        onClick={ () => navigate('/story/new', { state: currentAuthor }) } 
      >
        Create a New Story as {currentAuthor.name} 
      </NewStoryBtn>
      <AddAuthorCard variant="contained" onClick={() => handleToggleForm() }>
        {
          isAdding ?
          <NewAuthorForm
            onSubmit={ handleSubmit }
            author={ newAuthor }
            onAddInput={ handleAddInput }
          />
          :
          "Add New Pen Name"
        }  
      </AddAuthorCard> 
    </AuthorsBox>
  )
}

export default Authors

const AuthorsBox = styled(Box)(authorsBoxCss)
const Title = styled(Typography)(authorTitleCss)
const SubTitle = styled(Typography)(authorSubtitleCss)
const BtnList = styled(Container)(authorBtnListCss)
const AuthorBtn = styled(Button)(authorBtnCss)
const AddAuthorCard = styled(Card)(addAuthorCardCss)
const NewStoryBtn = styled(Button)(newStoryBtnCss)
