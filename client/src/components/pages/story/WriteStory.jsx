import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, styled, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGET, handleAPI, handleDELETE } from '../../../helpers/fetchRequests';
import { AuthorContext } from '../../../context/AuthorContext';
import Preview from './Preview';
import Paragraph from './Paragraph';
import TextEditor from '../../forms/text-editor/TextEditor';
import AuthError from '../login/login-side/AuthError';
import { cancelEditBtnCss, genreAuthorNamesCss, rightViewCss, storyStatsCss, submitBtnCss, viewContainerCss, writeStoryContainerCss } from '../../../styles/story/writeStoryCss';


const WriteStory = () => {
  const [userHtmlStr, setUserHtmlStr] = useState('');
  const [storyObj, setStoryObj] = useState({});
  const [paragraphs, setParagraphs] = useState([]);
  const [paragraphId, setParagraphId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [errors, setErrors] = useState([]);
  const [currentAuthor] = useContext(AuthorContext);
  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = `/stories/${location.state}`;
  const paragraphUrl = `/paragraphs/${paragraphId}`;
  const paragraphJson = {
    author_id: currentAuthor.id,
    rich_text_str: userHtmlStr
  };

  useEffect(() => {
    handleGET(baseUrl).then((story) => {
      setStoryObj(story);
      setParagraphs(story.paragraphs);
    })
  }, [baseUrl]);
  
  const handleCancel = () => {
    setEditValue('');
    setParagraphId(null);
  };

  const handleEditBtn = (str, id) => {
    setEditValue(str);
    setParagraphId(id);
  };
  
  const handleDelete = (id) => {
    setParagraphId(id);
    handleDELETE(baseUrl + `/paragraphs/${id}`)
    .then((res) => res.json())
    .then((deletedParagraph) => {
      const updatedParagraphs = paragraphs.filter((p) => p.id !== deletedParagraph.id);
      setParagraphs(updatedParagraphs);
      setEditValue('');
      setParagraphId(null);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateParagraphUrl = baseUrl + paragraphUrl;
    handleAPI(updateParagraphUrl, "PATCH", paragraphJson)
    .then((res) => {
      if (res.ok) {
        res.json().then((newParagraph) => {
          const updatedParagraphs = paragraphs.map((p) => p.id === paragraphId ? newParagraph : p );
          setParagraphs(updatedParagraphs);
          setEditValue('');
          setParagraphId(null);
        });
      } else {
        res.json().then(console.log);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userHtmlStr === '<p><br/></p>') {
      setErrors(["Please type your contribution in the Text Editor."]);
    } else {
      const newParagraphURL = baseUrl + `/paragraphs`;
      handleAPI(newParagraphURL, "POST", paragraphJson)
      .then((res) => {
        if (res.ok) {
          res.json().then(console.log)
          .then(navigate('/home'));
        } else {
          res.json().then(console.log);
        }
      });
    }
  }

  const paragraphsList = paragraphs.map((para) => (
    <Paragraph 
      key={ para.id } 
      // chosenId={ paragraphId }
      isAuthor={ currentAuthor.name === para.author ? true : false }
      onDelete={ handleDelete }
      paragraphData={ para } 
      updateUserHtml={ handleEditBtn }
      />
  ))

  return (
    <WriteStoryContainer>
      <StoryStats>
        <Typography variant="h4">Story Title: {storyObj.title}</Typography>
        <GenreAuthorNames>
          <Typography variant="h6">Genre: {storyObj.genre}</Typography>
          <Typography variant="h6">Your current Pen Name: {currentAuthor.name}</Typography>
        </GenreAuthorNames>
        <Button onClick={() => navigate('/home')} >Back to Dashboard</Button>
      </StoryStats>
      <ViewContainer>
        <Preview 
          paragraphs={ paragraphsList } 
          newJsxStr={ userHtmlStr } 
          isEditing={ editValue ? true : false }
          authorName={ currentAuthor.name }
        />
        <RightView>
          <TextEditor 
            handleHtml={ setUserHtmlStr }
            editValue={ editValue }
          />
        {
          editValue ?
          <>
            <SubmitBtn 
              variant="contained"
              onClick={ (e) => handleUpdate(e) }
            >
              Update
            </SubmitBtn>
            <CancelEditBtn
              variant="contained"
              onClick={ () => handleCancel() }
            >
              Cancel and continiue
            </CancelEditBtn>
          </>
          :
            <SubmitBtn 
              variant="contained"
              onClick={ (e) => handleSubmit(e) }
            >
              Submit
            </SubmitBtn>
        }
        { errors.map((err) => <AuthError key={ err } clearMessage={ setErrors }>{ err }</AuthError>) }
        </RightView>
      </ViewContainer>
    </WriteStoryContainer>
  )
}

export default WriteStory

const WriteStoryContainer = styled(Container)(writeStoryContainerCss);
const StoryStats = styled(Container)(storyStatsCss);
const GenreAuthorNames = styled(Container)(genreAuthorNamesCss);
const ViewContainer = styled(Container)(viewContainerCss);

// turn into formControl
const RightView = styled(Container)(rightViewCss);
const SubmitBtn = styled(Button)(submitBtnCss);
const CancelEditBtn = styled(Button)(cancelEditBtnCss);