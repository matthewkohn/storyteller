const newUserContainerCss = ({ theme }) => `
color: ${theme.palette.secondary.dark};
margin-top: 10vh;
text-align: center;
`

const ctaCss = {
  display: 'flex',
  justifyContent: 'center',
}

const skipBtnCss = {
  margin: '0 0 0 70px'
}

// NewUserForm component
const newUserBoxCss = ({ theme }) => `
background: ${theme.palette.primary.main};
width: 70vw;
max-width: 750px;
border-radius: 15px;
margin: 15px auto;
padding: 15px 20px;

`

const submitBtnCss = ({ theme }) => `
color: ${theme.palette.primary.light};
border: 3px solid ${theme.palette.primary.dark};
border-radius: 20px;

`

const favoritesBoxCss = ({ theme }) => `
background: ${theme.palette.secondary.light};
display: flex;
flex-direction: column;
margin: 5px auto;
padding: 10px;
align-items: center;
border-radius: 15px;
width: 60%;
`

const favInputCss = {
  padding: '3px',
  width: 'auto',
}

const primaryItemsCss = ({ theme }) => `
background: ${theme.palette.secondary.light};
color: ${theme.palette.primary.dark};
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 5px;
padding: 0 0 0 15px;  
margin: 5px 0;
height: 60px;
`


export { ctaCss, favInputCss, favoritesBoxCss, newUserBoxCss, newUserContainerCss, primaryItemsCss, skipBtnCss, submitBtnCss }