import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGET, handleAPI, handleDELETE } from '../../../helpers/fetchRequests';
import { AuthorContext } from '../../../context/AuthorContext';
import { writeStoryContainerCss, writeStoryBodyCss, previewContainerCss, richTextBoxCss, previewBoxCss } from '../../../styles/story/writeStoryCss';
import JsxParser from 'react-jsx-parser';
import Paragraph from './Paragraph';
import WriteStoryForm from '../../forms/WriteStoryForm';
// import AuthError from '../login/login-side/AuthError';


const WriteStory = () => {
  const [userHtmlStr, setUserHtmlStr] = useState('');
  const [editValue, setEditValue] = useState('');
  const [paragraphs, setParagraphs] = useState([]);
  const [paragraphId, setParagraphId] = useState(null);
  // const [errors, setErrors] = useState([]);

  const [currentAuthor] = useContext(AuthorContext);

  const navigate = useNavigate();
  const location = useLocation();
  const { id, title, genre } = location.state;
  const baseUrl = `/stories/${id}`;

  const paragraphUrl = `/paragraphs/${paragraphId}`;
  const paragraphJson = {
    author_id: currentAuthor.id,
    rich_text_str: userHtmlStr
  };


  useEffect(() => {
    handleGET(baseUrl).then((story) => {
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
      // setErrors(["Please type your contribution in the Text Editor."]);
      console.log("BLANK")
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
      isAuthor={ currentAuthor.name === para.author ? true : false }
      onDelete={ handleDelete }
      paragraphData={ para } 
      updateUserHtml={ handleEditBtn }
      />
  ))

  return (
    <WriteStoryContainer>
      <Typography variant="h2">Story Title: {title}</Typography>
      <Button onClick={() => navigate('/home')} >Back to Dashboard</Button>
      <Body>
        <PreviewContainer>
          <Typography variant="h3">The story so far</Typography>
          <Preview>{ paragraphsList }</Preview>
          <LivePreview>
            <JsxParser jsx={ userHtmlStr } />
          </LivePreview>
        </PreviewContainer>
        <WriteStoryForm
          genre={ genre }
          updateInput={ setUserHtmlStr }
          editValue={ editValue }
          onUpdate={ handleUpdate }
          onCancel={ handleCancel }
          onSubmit={ handleSubmit }
        />
         
      </Body>
        {/* { errors.map((err) => <AuthError key={ err } clearMessage={ setErrors }>{ err }</AuthError>) } */}

    </WriteStoryContainer>
  )
}

export default WriteStory

const WriteStoryContainer = styled(Container)(writeStoryContainerCss);
const Body = styled(Container)(writeStoryBodyCss);
const PreviewContainer = styled(Container)(previewContainerCss);
const LivePreview = styled(Box)(richTextBoxCss);
const Preview = styled(Box)(previewBoxCss);