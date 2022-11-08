import { Box, Card, styled, Typography } from '@mui/material'
import React from 'react'
import JsxParser from 'react-jsx-parser'
import { newParagraphCardCss, previewBoxCss, titleCss } from '../../../styles/story/storyCss'

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

const PreviewBox = styled(Box)(previewBoxCss);
const NewParagraphCard = styled(Card)(newParagraphCardCss);
const Title = styled(Typography)(titleCss);