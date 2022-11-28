const previewBoxCss = {
  width: '100%',
  maxHeight: '45vh',
  overflowY: 'scroll',
}

const newParagraphCardCss = ({ theme }) => `
background: ${theme.palette.primary.light};
color: ${theme.palette.secondary.dark};
padding: 10px;
text-align: left;
indent: 10px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const titleCss = ({ theme }) => `
color: ${theme.palette.primary.main};
background: ${theme.palette.primary.light};
`

export { previewBoxCss, newParagraphCardCss, titleCss }