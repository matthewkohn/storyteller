const controlBoxCss = ({ theme }) => `
  background: ${theme.palette.secondary.light};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 18px;
  margin: 0 0 20px;
  width: 100%;
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