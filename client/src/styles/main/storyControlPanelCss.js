const controlBoxCss = ({ theme }) => `
  display: flex;
  align-items: center;
  // justify-contents: flex-end;
  flex-direction: column;
  background: ${theme.palette.secondary.light};
  border: 2px solid ${theme.palette.secondary.dark};
  padding: 5px 0;
  margin: 0 auto 5px;
  border-radius: 35px;
  width: 55%;
  height: 14.5vh;
  max-height: 110px;
`

const genreBoxCss = {
  display: 'inherit',
  alignItems: 'flex-end',
  justifyContent: 'center',
  margin: 'auto',
}


const styledRadioGroupCss = {
  display: 'inherit',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
}


export { controlBoxCss, genreBoxCss, styledRadioGroupCss }