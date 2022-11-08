import { Card, Container, IconButton, styled, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import JsxParser from 'react-jsx-parser';
import AlertDialogSlide from './AlertDialogSlide';
import { buttonGroupCss, captionCss, paraCardCss } from '../../../styles/story/storyCss';

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

const ParaCard = styled(Card)(paraCardCss);
const Caption = styled(Typography)(captionCss);
const ButtonGroup = styled(Container)(buttonGroupCss);