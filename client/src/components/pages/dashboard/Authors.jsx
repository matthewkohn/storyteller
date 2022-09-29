import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Container, FormControl, styled, TextField, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router-dom';
import { handleAPI, handleGET } from '../../../helpers/fetchRequests';

const Authors = ({ currentAuthor, onSelectAuthor }) => {
  const [authors, setAuthors] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newAuthor, setNewAuthor] = useState("");
  // const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleGET('/authors')
    .then((data) => {
      setAuthors(data)
      onSelectAuthor({ name: data[0].name, id: data[0].id })
    })
    // eslint-disable-next-line
  }, [])

  console.log("Authors from Authors: ", currentAuthor)
  // console.log("Errors: ", errors)

  const authorsList = authors.map((author) => (
      <AuthorBtn 
        key={author.id}
        variant={ currentAuthor.name === author.name ? "contained" : "outlined"} 
        onClick={ () => onSelectAuthor({ name: author.name, id: author.id }) } 
      >
        <Typography variant="body2">{author.name}</Typography>
      </AuthorBtn>
  ))

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
            onSelectAuthor({ name: data.name, id: data.id })
            setNewAuthor("")
          })
        } else {
          res.json().then((err) => {
            // setErrors(err.errors)
            setNewAuthor("")
            setIsAdding(false)
          })
        }
      })
    } else {
      setIsAdding(false)
    }
  }


  return (
    <AuthorsBox>
      <Typography variant="h5">Pen Names</Typography>
      <BtnList>
        { authorsList }

      </BtnList>
      <NewStoryBtn 
        variant="contained"
        onClick={ () => navigate('/story/new', { state: currentAuthor }) } 
      >
        Create a New Story as {currentAuthor.name} 
      </NewStoryBtn>
      <AddAuthorCard variant="contained" onClick={() => handleToggleForm() }>
        {
          isAdding ?
            <FormControl>
              <AddBox
                component="form"
                onSubmit={ (e) => handleSubmit(e) }
                id="add-author-form"
              >  
                <TextField 
                  variant="filled"
                  size="small"
                  required
                  autoFocus
                  value={ newAuthor }
                  onChange={ (e) => handleAddInput(e) }
                />
                <SubmitBtn 
                  size="small" 
                  form="add-author-form" 
                  type="submit"
                  endIcon={ <AddBoxIcon /> }
                />
              </AddBox>
            </FormControl>
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
  &:hover {
    background: ${theme.palette.secondary.dark};
    color: ${theme.palette.secondary.light};
  }
`)

const NewStoryBtn = styled(Button)(({ theme }) => `
  color: ${theme.palette.secondary.dark};
`)

const SubmitBtn = styled(Button)(({ theme }) => `
  color: ${theme.palette.secondary.dark};
`)

const AddBox = styled(Box)(({ theme }) => `
  background: ${theme.palette.secondary.light}
  color: ${theme.palette.secondary.dark};
`)