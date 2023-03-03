const dashboardCss = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  '@media (max-width: 640px)': {
    flexDirection: 'column',
  },
};

const controlSectionCss = {
  width: '40%',
  height: '90vh',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media (max-width: 640px)': {
    width: '90%',
    padding: '10px 0 0'
  },
  '@media (max-width: 400px)': {
    width: '98%',
  }
};

const welcomeTextCss = {
  fontSize: '1.7rem',
  '@media (max-width: 640px)': {
    textAlign: 'center',
    fontSize: '1.4rem',
  }
}

const instructionsTextCss = {
  fontSize: '1.1rem',
  lineHeight: '18px',
  margin: '10px 0 15px',
  '@media (max-width: 640px)': {
    textAlign: 'center',
  },
}

const storiesSectionCss = ({ theme }) => `
  background: ${theme.palette.primary.main};
  border: 3px solid ${theme.palette.primary.dark};
  border-radius: 3px;
  text-align: center;
  width: 50%;
  min-width: 330px;
  height: 90vh;
  margin: 15px 0;
  display: inherit;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 640px) {
    width: 90%;
  };
  @media (max-width: 400px) {
    width: 98%;
    min-width: auto;
  }
`;

const newStoryBtnCss = ({ theme }) => `
  color: ${theme.palette.secondary.dark};
  width: 100%;
  height: 50px;
  margin: 0 0 10px;
  :hover {
    color: ${theme.palette.secondary.light};
    font-size: 1.2rem;
    @media only screen and (max-width: 790px) and (min-width: 640px) {
      font-size: 1.1rem;
      line-height: 20px;
    }
  }
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
  welcomeTextCss,
  instructionsTextCss,
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