const newStoryBtnCss = ({ theme }) => `
color: ${theme.palette.secondary.dark};
`

const storiesBoxCss = {
  padding: '20px',
  borderRadius: '15px',
  margin: '50px auto 0',
  height: '100%',
}

const storiesHeaderCss = {
  display: 'flex',
  flexDirection: 'column',

}

const storyTitleCss = {
  display: 'inherit',
  width: '100%',
  justifyContent: 'space-between',
}

const storyCardContainerCss = {
  height: '60vh',
  overflowY: 'scroll',
}

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
}
`

const detailsCss = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 10px 10px',
  padding: '5px',
  height: 'auto',
}

const noStoriesTextCss = {
  display: 'flex',
  justifyContent: 'center',
  color: 'red',
}

const accordionSummaryCss = {
  display: 'flex',
  width: '100%',
}

const summaryContainerCss = {
  width: '100%',

}

const styledButtonGroupCss = {
  margin: '15px 0',
  // padding: '5px',
}


export { newStoryBtnCss, storiesBoxCss, storiesHeaderCss, storyCardContainerCss, storyCardAccordionCss, detailsCss, storyTitleCss, noStoriesTextCss, accordionSummaryCss, summaryContainerCss, styledButtonGroupCss }