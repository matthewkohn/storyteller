import React, { useContext, useEffect, useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material'
import { handleGET } from '../../helpers/fetchRequests';
import { AuthorContext } from '../../context/AuthorContext';
import CreateAuthorModal from './CreateAuthorModal';
// import AuthError from '../pages/login/login-side/AuthError';
// import { authorsBoxCss } from '../../styles/story/authorsCss';

const AuthorsDropdown = () => {
  const [currentAuthor, setCurrentAuthor] = useContext(AuthorContext)
  const [authors, setAuthors] = useState([]);
  // const [errors, setErrors] = useState([]);

  console.log("Current author: ", currentAuthor);
  console.log("Authors: ", authors)

  useEffect(() => {
    handleGET('/authors')
    .then((data) => {
      setAuthors(data)
      setCurrentAuthor({ name: data[0].name, id: data[0].id })
    })
    // eslint-disable-next-line
  }, [])

  const authorsList = authors.map((author) => (
      <MenuItem 
        key={ author.id }
        name={ author.name }
        value={ author.name }
        divider 
      >
        {author.name}
      </MenuItem>
  ))

  const handleAuthorSelection = (e) => {
    const choice = authors.find((a) => a.name === e.target.value);
    setCurrentAuthor(choice);
  }

  return (
    <FormControl >
      <Select
        required
        autoWidth
        value={ currentAuthor.name }
        onChange={ (e) => handleAuthorSelection(e) }
      >
        { authorsList }
        
        <CreateAuthorModal 
          authors={ authors }
          updateAuthors={ setAuthors }
          onNewAuthor={ setCurrentAuthor }
        />
          
      {/* { errors.map((err) => <AuthError key={ err } clearMessage={ setErrors }>{ err }</AuthError>) */}
      </Select>
    </FormControl>
  )
}

export default AuthorsDropdown

// const AuthorsBox = styled(Box)(authorsBoxCss)
