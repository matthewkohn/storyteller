const newStoryBoxCss = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const submitBtnCss = ({ theme }) => `
width: 70%;
height: 50px;
border-radius: 15px;
&:hover {
  background: ${theme.palette.secondary.dark};
  color: ${theme.palette.secondary.light};
}
`

const editorWrapperCss = {
  marginBottom: '10px',
}

const titleGenreWrapperCss = {
  display: 'inherit',
  justifyContent: 'space-evenly',
  marginBottom: '10px',
}

export { newStoryBoxCss, submitBtnCss, editorWrapperCss, titleGenreWrapperCss }