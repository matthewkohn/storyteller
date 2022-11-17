import React, { useContext, useEffect, useState } from 'react';
import { IconButton, MenuItem, Select, TextField } from '@mui/material'
import { handleGET } from '../../helpers/fetchRequests';
import { AuthorContext } from '../../context/AuthorContext';
// import AuthError from '../pages/login/login-side/AuthError';
import PublishIcon from '@mui/icons-material/Publish';
// import { authorsBoxCss } from '../../styles/story/authorsCss';

const AuthorsDropdown = () => {
  const [currentAuthor, setCurrentAuthor] = useContext(AuthorContext)
  const [authors, setAuthors] = useState([]);
  // const [errors, setErrors] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");
  // const authorURL = '/authors';

  console.log(currentAuthor);

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

  const handlePublish = (e) => {
    console.log("CLICK!")
  //   e.preventDefault()
  //   setAuthors({ ...authors, newAuthor });
  //   if (newAuthor !== "") {
  //     handleAPI(authorURL, "POST", newAuthor)
  //     .then((res) => {
  //       if (res.ok) {
  //         res.json().then((author) => setCurrentAuthor(author));
  //       } else {
  //         console.log("Problem connecting, new author failed. Please try again.")
  //       }
  //     })
  //   }
  }

  const handleAuthorSelection = (e) => {
    const choice = authors.find((a) => a.name === e.target.value);
    setCurrentAuthor(choice);
  }

  return (
    <>
      <Select
        required
        autoWidth
        value={ currentAuthor.name }
        onChange={ (e) => handleAuthorSelection(e) }
      >
        { authorsList }
        <MenuItem>
          <TextField
            label="Create a New Pen Name"
            value={ newAuthor }
            onChange={ (e) => setNewAuthor(e.target.value) }
          />
          <IconButton  onClick={(e) => handlePublish(e) }>
            <PublishIcon />
          </IconButton>
        </MenuItem>
      {/* { errors.map((err) => <AuthError key={ err } clearMessage={ setErrors }>{ err }</AuthError>) */}
      </Select>
    </>
  )
}

export default AuthorsDropdown

// const AuthorsBox = styled(Box)(authorsBoxCss)

