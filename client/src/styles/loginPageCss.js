import { signupBackgroundImg } from "../assets/images/images";

// landing page 
const backgroundContainerCss = {
  height:'100%',
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
  },
};

const foregroundContainerCss = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
};

const landingTitleCss = ({ theme }) => `
  color: ${theme.palette.secondary.dark};
  text-align: center;
  font-family: ${theme.typography.fontFamily};
  @media (max-width: 660px) {
    font-size: 50px;
    letter-spacing: 1.8px;
  };
`;

const landingSubtitleCss = ({ theme }) => `
  color: ${theme.palette.primary.dark};
  text-align: center;
  font-family: ${theme.typography.fontFamily};
  font-size: 20px;
  padding: 10px 0 20px;
  font-style: italic;
  letter-spacing: 1.8px;
  @media (max-width: 660px) {
    font-size: 16px;
    letter-spacing: 1.8px;
  };
  @media (max-width: 320px) {
    width: 80%;
  };
`;

const landingFooterCss = {
  fontStyle: 'italic',
  opacity: '0.7',
  position: 'absolute',
  bottom: 0,
};

// login container
const signInContainerCss = ({ theme }) => `
  background: ${theme.palette.primary.dark};
  color: ${theme.palette.primary.light};
  height: 475px;
  min-width: 500px;
  border-radius: 20px;
  padding: 20px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    min-width: auto;
  }
  @media (max-width: 375px) {
    height: 400px;
    padding: 5px 10px;
  }
`;

const taglineCss = {
  fontSize: '30px',
  margin: '20px 0 30px',
  '@media (max-width: 375px)': {
    fontSize: '20px',
  },
};

const toggleBtnCss = ({ theme }) => `
:hover {
  background: ${theme.palette.secondary.light};
  color: ${theme.palette.secondary.dark};
}
`;

// LoginForm
const loginBoxCss = {
  display: 'flex',
  flexDirection: 'column',
};

const loginTextField = ({ theme }) => `
background: ${theme.palette.primary.light};
border-radius: 5px;
margin: 0 auto 15px;
font-family: 'Kalam';
@media (max-width: 375px) {
  margin: 0 10px 10px;
}
`;

const submitBoxCss = {
  height: '80px',
};

const submitBtnCss = ({ theme }) => `
margin: 15px auto;
padding: 20px;
border: 1px solid #666;
border-radius: 25px;
color: ${theme.palette.primary.light};
:hover {
  background: ${theme.palette.secondary.light};
  color: ${theme.palette.secondary.dark};
};
`;

const errorBoxCss = ({ theme }) => `
  color: red;
  background: lightblue;
  margin: 2px auto;
  padding: 0 15px;
  border-radius: 4px;
  font-family: 'Kalam';
  font-size: 14px;
  height: auto;
`;

export { 
  backgroundContainerCss,
  foregroundContainerCss,
  landingTitleCss,
  landingSubtitleCss,
  landingFooterCss,
  loginTextField,  
  loginBoxCss, 
  signInContainerCss, 
  submitBoxCss,
  submitBtnCss, 
  taglineCss, 
  toggleBtnCss,
  errorBoxCss
}