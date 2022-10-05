import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Card, Container, styled, Typography } from '@mui/material'
// import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router-dom';
import { handleAPI, handleGET } from '../../../helpers/fetchRequests';
import { AuthorContext } from '../../../context/AuthorContext';
import AuthError from '../landing/login-side/AuthError';
import NewAuthorForm from '../../forms/NewAuthorForm';

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
      // console.log("Data from Authors: ", data)
      setCurrentAuthor({ name: data[0].name, id: data[0].id })
    })
    // eslint-disable-next-line
  }, [])
  
  
  // console.log("Authors from Authors: ", currentAuthor)
  // console.log("Errors: ", errors)

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
            console.log(data)
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
            // onBlur={ setIsAdding }
          />
          :
          "Add New Pen Name"
        }  
      </AddAuthorCard> 
    </AuthorsBox>
  )
}

export default Authors

const AuthorsBox = styled(Box)({
  // border: '1px solid orange',
  padding: '20px',
  borderRadius: '15px',
  margin: '10px',
  width: 'auto',
  maxWidth: '240px',
  height: '80vh',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
})

const Title = styled(Typography)({
  fontSize: '36px',
  fontStyle: 'italic'
})

const SubTitle = styled(Typography)({
  marginBottom: '20px',
})

const BtnList = styled(Container)(({ theme }) => `
  height: 80%;
  max-height: 100%;
  width: 100%;
  text-align: center;
`)

const AuthorBtn = styled(Button)(({ theme }) => `
  margin: 5px;
  max-width: 100%;
  overflow: hidden;
`)

const AddAuthorCard = styled(Card)(({ theme }) => `
  color: ${theme.palette.secondary.dark};
  background: ${theme.palette.secondary.main};
  font-size: 20px;
  text-align: center;
  padding: 10px;
  margin-top: 15px;
  height: 60px;
  width: 100%;
  &:hover {
    background: ${theme.palette.secondary.dark};
    color: ${theme.palette.secondary.light};
  }
`)

const NewStoryBtn = styled(Button)(({ theme }) => `
  color: ${theme.palette.secondary.dark};
`)
