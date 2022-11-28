import React from 'react'
import { Box, Card, styled, Typography } from '@mui/material'
import { newParagraphCardCss, previewBoxCss, titleCss } from '../../../styles/story/previewCss'

const Preview = ({ authorName, isEditing,  paragraphs }) => {
  return (
    <PreviewBox>
      { !isEditing ? paragraphs : <></> }
      <NewParagraphCard
        raised
      >
        <Title variant="h6">
          { !isEditing ? `New Entry by: ${authorName}` : "Update This Part of your Story:" }
        </Title>
      </NewParagraphCard>
    </PreviewBox>
  )
}

export default Preview

const PreviewBox = styled(Box)(previewBoxCss);
const NewParagraphCard = styled(Card)(newParagraphCardCss);
const Title = styled(Typography)(titleCss);