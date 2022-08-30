import { signupBackgroundImg } from "../main/images"

const backgroundContainerCss = {
  height:'100vh',
  width: '100%',
  minWidth: '100%',
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  '&::after': {
    content: "''",
    backgroundImage: signupBackgroundImg,
    opacity: 0.3,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: -1,
    overflow: 'hidden',
  }
}

const signInContainerCss = ({ theme }) => `
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 60vh;
width: 450px;
padding: 20px;
margin: 10vh auto;
text-align: center;
border-radius: 20px;
background: ${theme.palette.primary.dark};
color: ${theme.palette.primary.light};
`

const taglineCss = {
  margin: '20px 0 30px'
}

const titleCss = {
  margin: '20px auto',
  fontWeight: 700,
  letterSpacing: '2px',

}

const toggleBtnCss = ({ theme }) => `
:hover {
  background: ${theme.palette.secondary.light};
  color: ${theme.palette.secondary.dark};
}
`

const errorBoxCss = ({ theme }) => `
color: red;
background: lightblue;
margin: 2px auto;
padding: 0 25px;
border-radius: 10px;
font-family: 'Kalam';
`

const loginBoxCss = {
  display: 'flex',
  flexDirection: 'column'
}

const credentialCss = ({ theme }) => `
background: ${theme.palette.primary.light};
border-radius: 5px;
margin: 0 auto 15px;
font-family: 'Kalam';
// ${theme.typography.fontFamily}: 'Kalam';
`

const submitBtnCss = ({ theme }) => `
margin: 23px auto;
padding: 20px;
border: 1px solid #666;
border-radius: 25px;
color: ${theme.palette.primary.light};
:hover {
  background: ${theme.palette.secondary.light};
  color: ${theme.palette.secondary.dark};
}
`


export { backgroundContainerCss, credentialCss, errorBoxCss, loginBoxCss, signInContainerCss, submitBtnCss, taglineCss, titleCss, toggleBtnCss }