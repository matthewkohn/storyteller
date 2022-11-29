const writeStoryContainerCss = {
  paddingTop: '70px',
  fontFamily: 'Kalam',
  textAlign: 'center',
  maxWidth: '100vw',
  maxHeight: '100vh',
  // webkitScrollbar: {
	//   width: '20'
  // },
  // webkitScrollbarTrack: {
  // // "&::-webkit-scrollbar-track": {
	//   backgroundColor: "orange"
  // },
  // webkitScrollbarThumb: {
	//   backgroundColor: "red",
	//   borderRadius: 2
  // }
}

const writeStoryBodyCss = {
  display: 'flex',
  alignItems: 'flex-start',
}

const previewContainerCss = {
  maxHeight: '70vh',
}

const previewBoxCss = {
  width: '100%',
  maxHeight: '40vh',
  overflowY: 'scroll',
  margin: '20px 0',
}

const richTextBoxCss = {
  border: '1px solid black',
  borderRadius: '5px',
  maxHeight: '20vh',
  height: '100%',
  margin: '10px 0',
  padding: '0 15px 5px',
  textAlign: 'left',
  overflowY: 'scroll',
}


const editContainerCss = {
  // height: '100%',
  margin: 'auto',
}

const penNamesCss = {
  display: 'inherit',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 0 10px'

}

const authorLabelCss = {
  padding: '0 15px 0 0',
}

const submitBtnCss = {
  width: '100%',
  // height: '60px',
  marginBottom: '7px',
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
  previewBoxCss,
  authorLabelCss,
}