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
  marginBottom: '30px',
  width: '120%',
}

const requiredInputWrapperCss = {
  display: 'inherit',
  flexDirection: 'column',
  marginBottom: '10px',

}

const styledFormControlLabelCss = {
  padding: '20px',
  margin: 'auto'
}

export { newStoryBoxCss, submitBtnCss, editorWrapperCss, requiredInputWrapperCss, styledFormControlLabelCss }