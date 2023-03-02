const bannerCss = ({ theme }) => `
  color: ${theme.palette.primary.light};
  background-color: ${theme.palette.primary.dark};
  flex-direction: row;
  justify-content: space-between;
  max-height: 40px;
  position: relative;
  width: 100%;
`;

const mainTitleCss = {
  fontSize: '2rem',
};

const logoutBtnCss = ({ theme }) => `
color: ${theme.palette.primary.light};
margin: 0 10px;
height: 90%;
:hover {
  color: ${theme.palette.secondary.light};
  background-color: ${theme.palette.secondary.dark}
}
`;


export { bannerCss, logoutBtnCss, mainTitleCss };