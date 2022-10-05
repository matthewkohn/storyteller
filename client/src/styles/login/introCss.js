const headerCss = {
  marginBottom: '20px',
  fontWeight: '700',
}

const introCardCss = ({ theme }) => `
background: ${theme.palette.primary.light};
color: ${theme.palette.primary.dark};
padding: 20px 45px;
border-radius: 20px;
height: 100%;

`

const introContainerCss = {
  margin: '10vh auto 10vh',
  minHeight: '80vh',
  maxWidth: '50vw',
  height: '100',
  width: '50%',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-between',
  justifyItems: 'center',
  alignItems: 'center',
  // padding: '30px',
}

const introToggleBtnCss = ({ theme }) => `
color: ${theme.palette.primary.dark};
background: ${theme.palette.secondary.light};
font-weight: 700;
border-radius: 20px;
width: 50%;
margin: 0 auto 10px;
:hover {
  
}
`

const sectionCss = {
  fontSize: '1.2rem',
  margin: '5px 40px 10px'
}

export { headerCss, introCardCss, introContainerCss, introToggleBtnCss, sectionCss }