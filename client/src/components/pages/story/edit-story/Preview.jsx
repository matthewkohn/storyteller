import { Box, styled } from '@mui/material'
import React from 'react'
import JsxParser from 'react-jsx-parser'

const Preview = ({ jsx }) => {
  return (

    // Displays text-only preview of the first.../...last paragraphs
    // Scrollable box that will be used in Dashboard (Add '+' button if not disabled)
    // and in WriterContainer (no button, view only)

    <PreviewBox>
      <JsxParser jsx={ jsx } />
    </PreviewBox>
  )
}

export default Preview

const PreviewBox = styled(Box)({
  border: '1px solid purple',
  borderRadius: '15px',
  width: '50%',
  maxHeight: '75vh',
  margin: '0 30px',
  padding: '10px',
  overflowY: 'scroll',

})