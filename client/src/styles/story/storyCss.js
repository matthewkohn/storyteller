const contentTextCss = {
  fontSize: '24px',
}

const newStoryContainerCss = {
  paddingTop: '60px',
  maxHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}

const newStoryTitleCss = {
  textAlign: 'center',
  margin: '0 0 10px',
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

const prettyBoxCss = ({ theme }) => `
  font-family: 'Kalam', Arial, sans-serif;
  font-size: 26px;
  background: ${theme.palette.primary.dark};
  border-radius: 10px;
  padding: 5px 15px;
  overflow-y: scroll;
  max-width: 65vw;
`


const titleViewCss = {
  fontSize: '40px',
}

const genreCss = {
  fontSize: '30px',
}

const backNavCss = {
  position: 'fixed',
  top: '130px',
  // right: '50px',
}

const viewNavCss = {
  position: 'fixed',
  
  // top: '100px',
  // left: '350px',
}




export { 
  contentTextCss, 
  newStoryContainerCss, 
  newStoryTitleCss,
  newStoryIntroCss, 
  paraCardCss,  
  captionCss,
  buttonGroupCss,
  viewContainerCss,
  detailsCss,
  paragraphBoxCss,
  prettyBoxCss,
  titleViewCss,
  genreCss,
  backNavCss,
  viewNavCss
}