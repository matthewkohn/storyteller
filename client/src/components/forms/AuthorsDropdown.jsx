import React, { useContext, useEffect, useState } from 'react';
import { MenuItem, Select } from '@mui/material'
import { handleAPI, handleGET } from '../../helpers/fetchRequests';
import { AuthorContext } from '../../context/AuthorContext';
// import AuthError from '../pages/login/login-side/AuthError';
// import PublishIcon from '@mui/icons-material/Publish';
import CreateAuthorModal from './CreateAuthorModal';
// import { authorsBoxCss } from '../../styles/story/authorsCss';

const AuthorsDropdown = () => {
  const [currentAuthor, setCurrentAuthor] = useContext(AuthorContext)
  const [authors, setAuthors] = useState([]);
  // const [errors, setErrors] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");
  // const [open, setOpen] = useState(false)
  const authorURL = '/authors';

  console.log("Current author: ", currentAuthor);
  console.log("New author from AuthorsDropdown: ", newAuthor)
  console.log("Authors: ", authors)

  useEffect(() => {
    handleGET('/authors')
    .then((data) => {
      setAuthors(data)
      setCurrentAuthor({ 
        name: data[0].name, 
        id: data[0].id 
      })
    })
    // eslint-disable-next-line
  }, [])

  const authorsList = authors.map((author) => (
      <MenuItem 
        key={ author.id }
        name={ author.name }
        value={ author.name }
        divider 
        // onClick={ () => setCurrentAuthor(author) } 
      >
        {author.name}
      </MenuItem>
  ))

  const handleCreate = (e) => {
    console.log("CLICK!")
    e.preventDefault()
    if (newAuthor !== "") {
      handleAPI(authorURL, "POST", { name: newAuthor })
      .then((res) => {
        if (res.ok) {
          res.json().then((a) => {
            setAuthors([ ...authors, a]);
            setCurrentAuthor(a);
            setNewAuthor("");
          });
        } else {
          console.log("Problem connecting, new author failed. Please try again.")
        }
      })
    }
  }

  const handleNewAuthorInput = (e) => {
    setNewAuthor(e.target.value)
  }

  const handleAuthorSelection = (e) => {
    const choice = authors.find((a) => a.name === e.target.value);
    setCurrentAuthor(choice);
  }

  // const handleClose = () => setOpen(false);

  return (
    <>
      <Select
        required
        autoWidth
        value={ currentAuthor.name }
        onChange={ (e) => handleAuthorSelection(e) }
        // open={open}
        // onClose={ handleClose }
      >
        { authorsList }
        {/* <MenuItem> */}
          <CreateAuthorModal 
            onCreate={ handleCreate }
            onInputChange={ handleNewAuthorInput }
            newAuthor={ newAuthor }
          />
          {/* <TextField
            label="Create a New Pen Name"
            value={ newAuthor }
            onChange={ (e) => setNewAuthor(e.target.value) }
          />
          <IconButton  onClick={(e) => handleCreate(e) }>
            <PublishIcon />
          </IconButton> */}
        {/* </MenuItem> */}
      {/* { errors.map((err) => <AuthError key={ err } clearMessage={ setErrors }>{ err }</AuthError>) */}
      </Select>
    </>
  )
}

export default AuthorsDropdown

// const AuthorsBox = styled(Box)(authorsBoxCss)

