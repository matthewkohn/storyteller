const authorsBoxCss = {
  borderRadius: '15px',
  width: 'auto',
  maxWidth: '240px',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
}

const authorTitleCss = {
  fontSize: '36px',
  fontStyle: 'italic'
}

const authorSubtitleCss = {
  marginBottom: '20px',
}

const authorBtnListCss = ({ theme }) => `
height: 80%;
max-height: 100%;
width: 100%;
text-align: center;
`

const authorBtnCss = ({ theme }) => `
margin: 5px;
max-width: 100%;
overflow: hidden;
`

const addAuthorCardCss = ({ theme }) => `
color: ${theme.palette.secondary.dark};
background: ${theme.palette.secondary.main};
font-size: 20px;
text-align: center;
padding: 10px;
margin-top: 15px;
height: 60px;
width: 100%;
&:hover {
  background: ${theme.palette.secondary.dark};
  color: ${theme.palette.secondary.light};
}
`



export { addAuthorCardCss, authorBtnCss, authorBtnListCss, authorsBoxCss, authorSubtitleCss, authorTitleCss }