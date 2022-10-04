import { Box, Card, styled, Typography } from '@mui/material'
import React from 'react'
import JsxParser from 'react-jsx-parser'

const Preview = ({ authorName, isEditing, newJsxStr, paragraphs }) => {
  return (
    <PreviewBox>
      { !isEditing ? paragraphs : <></> }
      <NewParagraphCard
        raised
      >
        <Title variant="h6">
          { !isEditing ? `New Entry by: ${authorName}` : "Update This Part of your Story:" }
        </Title>
        <JsxParser jsx={ newJsxStr } />
      </NewParagraphCard>
    </PreviewBox>
  )
}

export default Preview

const PreviewBox = styled(Box)({
  // border: '1px solid purple',
  // borderRadius: '15px',
  width: '100%',
  maxHeight: '75vh',
  // margin: '0',
  // padding: '10px',
  overflowY: 'scroll',

})

const NewParagraphCard = styled(Card)(({ theme }) => `
  background: ${theme.palette.primary.light};
  color: ${theme.palette.secondary.dark};
  padding: 10px;
  text-align: left;
  indent: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`)

const Title = styled(Typography)(({ theme }) => `
  color: ${theme.palette.primary.main};
  background: ${theme.palette.primary.light};
`)