const controlBoxCss = ({ theme }) => `
  background: ${theme.palette.secondary.light};
  border: 2px solid ${theme.palette.secondary.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  border-radius: 35px;
  height: 60%;
`;

const genreBoxCss = {
  display: 'inherit',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
};


// Category & Genre Dropdowns
const styledCategoryBox = {
  padding: '10px',
  display: 'inherit',
};

const styledTypography = {
  margin: '0 10px 0 0'
};

const styledMenuList = {
  maxHeight: '300px',
  overflowY: 'scroll'
};

export { 
  controlBoxCss, 
  genreBoxCss,
  styledCategoryBox,
  styledTypography,
  styledMenuList
};