const writeStoryContainerCss = {
  paddingTop: '70px',
  fontFamily: 'Kalam',
  textAlign: 'center',
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

const writeStoryBodyCss = {
  display: 'flex',
  height: '100%',
}

const previewContainerCss = {

}

const editContainerCss = {
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  // justifyContent: 'space-between',
  // justifyItems: 'space-between',
  height: '100%',
  margin: 'auto',
  // alignItems: 'space-between',
}

const richTextBoxCss = {
  border: '1px solid black',
  borderRadius: '15px',
  height: '30vh',
  margin: '5px 0'
}



const penNamesCss = {
  display: 'inherit',
  justifyContent: 'space-between',
  alignItems: 'center',
  
}

const editGenreCss = {
  padding: '0 24px'
}

const submitBtnCss = {
  width: '100%',
  height: '60px',
  marginBottom: '7px',
}

const previewBoxCss = {
  width: '100%',
  maxHeight: '45vh',
  overflowY: 'scroll',
}

const cancelEditBtnCss = {
  width: '100%',
  height: '60px',
}

export { 
  cancelEditBtnCss,
  writeStoryContainerCss,
  writeStoryBodyCss,
  previewContainerCss,
  editContainerCss,
  submitBtnCss,
  penNamesCss,
  richTextBoxCss,
  editGenreCss,
  previewBoxCss,
}