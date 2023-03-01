const bannerCss = ({ theme }) => `
color: ${theme.palette.primary.light};
background-color: ${theme.palette.primary.dark};
flex-direction: row;
justify-content: space-between;
max-height: 40px;
`;

const logoutBtn = ({ theme }) => `
color: ${theme.palette.primary.light};
margin: 10px;
:hover {
  color: ${theme.palette.secondary.light};
  background-color: ${theme.palette.secondary.dark}
}
`;

const mainTitleCss = {
  fontSize: '2rem',
};

export { bannerCss, logoutBtn, mainTitleCss };