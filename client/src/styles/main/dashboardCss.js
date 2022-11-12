const dashboardContainerCss = {
  paddingTop: '40px',
}

const dashboardBoxCcss = {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  
}

const authorsBoxCss = {
  padding: '20px',
  borderRadius: '15px',
  margin: '10px',
  width: 'auto',
  maxWidth: '240px',
  height: '80vh',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
}

const authorTitleCss = {
  fontSize: '36px',
  fontStyle: 'italic'
}

const authorSubtitleCss = {
  marginBottom: '20px',
}

const authorBtnListCss = ({ theme }) => `
height: 80%;
max-height: 100%;
width: 100%;
text-align: center;
`

const authorBtnCss = ({ theme }) => `
margin: 5px;
max-width: 100%;
overflow: hidden;
`

const addAuthorCardCss = ({ theme }) => `
color: ${theme.palette.secondary.dark};
background: ${theme.palette.secondary.main};
font-size: 20px;
text-align: center;
padding: 10px;
margin-top: 15px;
height: 60px;
width: 100%;
&:hover {
  background: ${theme.palette.secondary.dark};
  color: ${theme.palette.secondary.light};
}
`

const newStoryBtnCss = ({ theme }) => `
color: ${theme.palette.secondary.dark};
`

const storiesBoxCss = {
  padding: '20px',
  borderRadius: '15px',
  margin: '10px',
  width: '75vw',
  height: '75vh',
}

const storyCardContainerCss = {
  height: '60vh',
  overflowY: 'scroll',
}

const headerBoxCss = ({ theme }) => `
display: flex;
justify-content: space-between;
background: ${theme.palette.secondary.light};
padding: 5px;
border-radius: 35px;
border: 2px solid ${theme.palette.secondary.dark};
`


const radioControlFormCss = {
  display: 'inherit',
  flexDirection: 'row',
  alignItems: 'space-between',
  width: '100%',
}

const styledRadioGroupCss = {
  display: 'inherit',
  flexDirection: 'column',
  width: '40%',
}

const radioLabelCss = {
  display: 'inherit',
  alignItems: 'center',
  padding: '10px',
  marginRight: '30px',
  width: '20%',
}

const genreBoxCss = {
  display: 'inherit',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
}

const storyCardAccordionCss = ({ theme }) => `
margin: 5px 0;
padding: 2px;
height: 100px;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
border-radius: 5px;
border-top: 5px solid brown;
border-bottom: 5px solid brown;
:hover {
  background: ${theme.palette.primary.dark};
  color: ${theme.palette.primary.light};
}
`

const detailsCss = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 10px',
  padding: '5px',
}



export { authorsBoxCss, authorTitleCss, authorSubtitleCss, authorBtnListCss, authorBtnCss, addAuthorCardCss, newStoryBtnCss, dashboardContainerCss, dashboardBoxCcss, storiesBoxCss, storyCardContainerCss, headerBoxCss, radioControlFormCss, styledRadioGroupCss, radioLabelCss, genreBoxCss, storyCardAccordionCss, detailsCss }