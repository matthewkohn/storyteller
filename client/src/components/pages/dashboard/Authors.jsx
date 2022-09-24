import { Box, Button, Container, FormControl, styled, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { handleAPI, handleGET } from '../../../helpers/fetchRequests';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [newAuthor, setNewAuthor] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    handleGET('/authors')
    .then((data) => {
      setAuthors(data)
      setCurrentAuthor(data[0].name)
    })
  }, [])

  console.log("Authors from Authors: ", newAuthor)
  console.log("Errors: ", errors)

  const authorsList = authors.map((author) => (
    <>
      <AuthorBtn 
        key={author.id}
        variant={ currentAuthor === author.name ? "contained" : "outlined"} 
        onClick={ () => setCurrentAuthor(author.name) } 
      >
        <Typography  variant="body2">{author.name}</Typography>
      </AuthorBtn>
    </>
  ))
  // Authors container in Dashboard, lets the user:
  //   * view their Pen Names 
  //   * create new pen name to write stories under => AuthorForm
  //   * filter active stories based on selected pen name

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
            setCurrentAuthor(data.name)
            setNewAuthor("")
          })
        } else {
          res.json().then((err) => {
            setErrors(err.errors)
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
          "+"
        }  
      </AddAuthorCard> 
    </AuthorsBox>
  )
}

export default Authors

const AuthorsBox = styled(Box)({
  border: '1px solid orange',
  padding: '20px',
  borderRadius: '15px',
  margin: '10px',
  width: 'auto',
  maxWidth: '240px',
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

const AddAuthorCard = styled(Button)(({ theme }) => `
  color: ${theme.palette.secondary.light};
  font-size: 20px;
  margin-top: 15px;
`)

const SubmitBtn = styled(Button)(({ theme }) => `
  color: ${theme.palette.secondary.light};
`)

const AddBox = styled(Box)({
  display: 'inherit',

})