// import React, { useEffect, useState } from 'react';
import { Card, IconButton, styled, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import JsxParser from 'react-jsx-parser'

const Paragraph = ({ isAuthor, paragraphData, updateUserHtml }) => {
  console.log("Paragraph data: ",paragraphData)

  const richText = paragraphData.rich_text_str
  console.log("Rich text: ", richText)

  const createdAt = new Date(paragraphData.created_at).toDateString();

  return (
    <ParaCard>
      <JsxParser jsx={ richText } />
      <Caption 
        variant="caption"
        sx={isAuthor ? {color: 'lightgreen', background: 'darkgreen'} : {color: 'red' }}        
      >
        written {createdAt} by {paragraphData.author}
      </Caption>
      {
        isAuthor ?
        <>
          <IconButton 
            onClick={ () => updateUserHtml(richText) }
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => console.log("DESTROY ME!!!")}>
            <DeleteForeverIcon />
          </IconButton>
        </>
        :
        null
      }

    </ParaCard>
    
  )
}

export default Paragraph

const ParaCard = styled(Card)({
  margin: '3px',
  textAlign: 'left',
  padding: '5px',
  width: '100%',
})

const Caption = styled(Typography)(({ theme }) => `
  padding: 1px 5px;
  border-radius: 5px;
`)