const controlBoxCss = ({ theme }) => `
  display: flex;
  flex-direction: column;
  background: ${theme.palette.secondary.light};
  border: 2px solid ${theme.palette.secondary.dark};
  padding: 5px 0;
  border-radius: 35px;
  height: 80%;

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