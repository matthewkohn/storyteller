const dashboardCss = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const controlSectionCss = {
  width: '35%',
  height: '90vh',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const storiesSectionCss = ({ theme }) => `
background: ${theme.palette.primary.main};
border: 3px solid ${theme.palette.primary.dark};
border-radius: 3px;
text-align: center;
width: 50%;
height: 90vh;
margin: 15px 0;
display: inherit;
flex-direction: column;
justify-content: space-around;
`;

const newStoryBtnCss = ({ theme }) => `
color: ${theme.palette.secondary.dark};
width: 100%';
`;

const storyCardContainerCss = {
  height: '70vh',
  overflowY: 'scroll',
};

const storyCardAccordionCss = ({ theme }) => `
margin: 5px 0;
padding: 2px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
border-radius: 5px;
border-top: 5px solid brown;
border-bottom: 5px solid brown;
:hover {
  background: ${theme.palette.primary.dark};
  color: ${theme.palette.primary.light};
};
`;

const detailsCss = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 10px 10px',
  padding: '5px',
  height: 'auto',
};

const noStoriesTextCss = {
  display: 'flex',
  justifyContent: 'center',
  color: 'red',
};

const accordionSummaryCss = {
  display: 'flex',
  width: '100%',
};

const summaryContainerCss = {
  width: '100%',
};

const styledButtonGroupCss = {
  margin: '15px 0',
};


export { 
  dashboardCss,
  controlSectionCss,
  storiesSectionCss,
  newStoryBtnCss, 
  storyCardContainerCss, 
  storyCardAccordionCss, 
  detailsCss, 
  noStoriesTextCss, 
  accordionSummaryCss, 
  summaryContainerCss, 
  styledButtonGroupCss 
};