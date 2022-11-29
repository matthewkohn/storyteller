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


export { 
  contentTextCss, 
  newStoryContainerCss, 
  newStoryTitleCss,
  newStoryIntroCss, 
  paraCardCss,  
  captionCss,
  buttonGroupCss,
}