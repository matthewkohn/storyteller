const viewContainerCss = {
  paddingTop: '80px',
  maxHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
}

const detailsCss = {
  width: '50%',
  textAlign: 'center',
  padding: '0 0 15px',
}

const paragraphBoxCss = {
  overflowY: 'scroll',
  width: '50%',
  height: '70vh',
}

const prettyBoxCss = ({ theme }) => `
  font-family: 'Kalam', Arial, sans-serif;
  font-size: 26px;
  background: ${theme.palette.primary.dark};
  border-radius: 10px;
  padding: 5px 15px;
  overflow-y: scroll;
  max-width: 65vw;
`

const titleViewCss = {
  fontSize: '40px',
}

const genreCss = {
  fontSize: '30px',
}

const backNavCss = {
  position: 'fixed',
  top: '130px',
}

const viewNavCss = {
  position: 'fixed',
}

export {
  viewContainerCss,
  detailsCss,
  paragraphBoxCss,
  prettyBoxCss,
  titleViewCss,
  genreCss,
  backNavCss,
  viewNavCss
}