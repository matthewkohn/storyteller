const headerBoxCss = ({ theme }) => `
display: flex;
justify-content: space-between;
background: ${theme.palette.secondary.light};
padding: 5px;
border-radius: 35px;
border: 2px solid ${theme.palette.secondary.dark};
`

const genreBoxCss = {
  display: 'inherit',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
}

const radioControlFormCss = {
  display: 'inherit',
  flexDirection: 'row',
  alignItems: 'space-between',
  width: '100%',
}

const radioLabelCss = {
  display: 'inherit',
  alignItems: 'center',
  padding: '10px',
  marginRight: '30px',
  width: '20%',
}

const styledRadioGroupCss = {
  display: 'inherit',
  flexDirection: 'column',
  width: '40%',
}


export { headerBoxCss, genreBoxCss, radioControlFormCss, radioLabelCss, styledRadioGroupCss }