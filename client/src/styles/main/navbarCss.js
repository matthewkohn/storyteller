const bannerCss = ({ theme }) => `
color: ${theme.palette.primary.light};
background-color: ${theme.palette.primary.dark};
flex-direction: row;
min-height: 10vh;
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
  letterSpacing: '2px',
}

export { bannerCss, navBtnCss, navHeaderCss }