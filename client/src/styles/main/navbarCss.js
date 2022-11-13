const bannerCss = ({ theme }) => `
color: ${theme.palette.primary.light};
background-color: ${theme.palette.primary.dark};
flex-direction: row;
justify-content: space-between;
max-height: 60px;
`

const navBtnCss = ({ theme }) => `
color: ${theme.palette.primary.light};
margin: 10px;
padding: 15px;
:hover {
  color: ${theme.palette.secondary.light};
  background-color: ${theme.palette.secondary.dark}
}
`

const navHeaderCss = {
  padding: '10px',
  flexGrow: 1,
}

export { bannerCss, navBtnCss, navHeaderCss }