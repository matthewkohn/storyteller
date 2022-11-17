const newStoryBoxCss = {
  // display: 'flex',
  // alignItems: 'flex-start',
}

const submitBtnCss = ({ theme }) => `
width: 100%;
height: 50px;
border-radius: 15px;
&:hover {
  background: ${theme.palette.secondary.dark};
  color: ${theme.palette.secondary.light};
}
`

const editorWrapperCss = {
  width: '65%',
  maxWidth: '500px',
  marginBottom: '10px',
}

const requiredInputWrapperCss = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
  alignItems: 'center',
  // justifyContent: 'center',
  // alignItems: 'center',
}

const styledFormControlLabelCss = {
  padding: '20px',
  margin: 'auto'
}

const newStoryFormHeaderCss = {
  display: 'inherit',
  width: '100%',
  justifyContent: 'center',
  paddingBottom: '5px',
}

export { newStoryBoxCss, submitBtnCss, editorWrapperCss, requiredInputWrapperCss, styledFormControlLabelCss, newStoryFormHeaderCss }