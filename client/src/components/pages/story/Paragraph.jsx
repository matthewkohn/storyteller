import { Card, Container, IconButton, styled, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import JsxParser from 'react-jsx-parser';
import AlertDialogSlide from './edit-story/AlertDialogSlide';

const Paragraph = ({ isAuthor, onDelete, paragraphData, updateUserHtml }) => {
  const richText = paragraphData.rich_text_str;
  const createdAt = new Date(paragraphData.created_at).toDateString();
  const time = new Date(paragraphData.created_at).toLocaleTimeString();

  return (
    <ParaCard >
      <JsxParser jsx={ richText } />
      {
        isAuthor ?
        <ButtonGroup>
          <IconButton 
            onClick={ () => updateUserHtml(richText, paragraphData.id) }
          >
            <EditIcon />
          </IconButton>
          <AlertDialogSlide 
            id={ paragraphData.id }
            onDelete={ onDelete }
          />
        </ButtonGroup>
        :
        <></>
      }
      <Caption 
        variant="caption"
        sx={ isAuthor ? {color: 'lightgreen', background: 'darkgreen'} : {color: 'red' } }        
      >
        written { createdAt } at { time } by { paragraphData.author }
      </Caption>
    </ParaCard>
    
  )
}

export default Paragraph

const ParaCard = styled(Card)({
  margin: '3px',
  textAlign: 'left',
  padding: '15px',
})

const Caption = styled(Typography)(({ theme }) => `
  padding: 1px 5px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;
`)

const ButtonGroup = styled(Container)({
  display: 'flex',
  justifyContent: 'flex-end',
})