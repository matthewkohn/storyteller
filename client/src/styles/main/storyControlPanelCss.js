const controlBoxCss = ({ theme }) => `
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${theme.palette.secondary.light};
  border: 2px solid ${theme.palette.secondary.dark};
  padding: 5px 0;
  margin: 5px 0;
  border-radius: 35px;
  width: 60%;
  height: 13.5vh;

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