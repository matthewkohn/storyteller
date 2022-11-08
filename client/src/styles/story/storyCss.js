const contentTextCss = {
  fontSize: '24px',
}

const newStoryContainerCss = {
  paddingTop: '100px',
  maxHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}

const newStoryIntroCss = {
  textAlign: 'center',
  padding: '10px',
}

const paraCardCss = {
  margin: '3px',
  textAlign: 'left',
  padding: '15px',
}

const captionCss = ({ theme }) => `
padding: 1px 5px;
border-radius: 5px;
display: flex;
justify-content: flex-end;
`

const buttonGroupCss = {
  display: 'flex',
  justifyContent: 'flex-end',
}

const previewBoxCss = {
  width: '100%',
  maxHeight: '75vh',
  overflowY: 'scroll',
}

const newParagraphCardCss = ({ theme }) => `
background: ${theme.palette.primary.light};
color: ${theme.palette.secondary.dark};
padding: 10px;
text-align: left;
indent: 10px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const titleCss = ({ theme }) => `
color: ${theme.palette.primary.main};
background: ${theme.palette.primary.light};
`

const viewContainerCss = {
  paddingTop: '80px',
  maxHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
}

const detailsCss = {
  width: '50%',
  textAlign: 'center',
  padding: '0 0 15px',
}

const paragraphBoxCss = {
  overflowY: 'scroll',
  width: '50%',
  height: '70vh',
}

const titleViewCss = {
  fontSize: '40px',
}

const genreCss = {
  fontSize: '30px',
}

const viewNavCss = {
  position: 'fixed',
  top: '100px',
  // right: '50px',
}




export { 
  contentTextCss, 
  newStoryContainerCss, 
  newStoryIntroCss, 
  paraCardCss,  
  captionCss,
  buttonGroupCss,
  previewBoxCss,
  newParagraphCardCss,
  titleCss,
  viewContainerCss,
  detailsCss,
  paragraphBoxCss,
  titleViewCss,
  genreCss,
  viewNavCss
}