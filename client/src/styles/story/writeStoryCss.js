const writeStoryContainerCss = {
  paddingTop: '80px',
  fontFamily: 'Kalam',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100vw',
  webkitScrollbar: {
	  width: '20'
  },
  webkitScrollbarTrack: {
  // "&::-webkit-scrollbar-track": {
	  backgroundColor: "orange"
  },
  webkitScrollbarThumb: {
	  backgroundColor: "red",
	  borderRadius: 2
  }
}

const storyStatsCss = {
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
}

const genreAuthorNamesCss = {
  display: 'inherit',
  justifyContent: 'space-evenly',
}

const viewContainerCss = {
  display: 'inherit',
  height: '70vh',
  // border: '1px solid black'
}

const rightViewCss = ({ theme }) => `
height: 300px;
background: ${theme.palette.secondary.light};
`

const submitBtnCss = {
  width: '100%',
  height: '60px',
  marginBottom: '7px',
}

const cancelEditBtnCss = {
  width: '100%',
  height: '60px',
}

export { 
  writeStoryContainerCss,
  storyStatsCss,
  genreAuthorNamesCss,
  viewContainerCss,
  rightViewCss,
  submitBtnCss,
  cancelEditBtnCss
}