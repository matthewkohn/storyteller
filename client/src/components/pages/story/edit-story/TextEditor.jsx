import React from "react"
import { Editor, RichUtils } from "draft-js"
import {stateToHTML} from 'draft-js-export-html';
import fixBreakLine from '../../../../helpers/fixBreakLine';
import { useConvertEditorState } from '../../../../hooks/useConvertEditorState'

const TextEditor = ({ handleHtml, editValue }) => {
  const [editorState, setEditorState] = useConvertEditorState(editValue)

  const handleKeyCommand = ((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return "handled"
    }
    return "not-handled"
  })

  const _onBoldClick = (() => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
  })


  // let className = 'RichEditor-editor';
  let contentState = editorState.getCurrentContent();
  // if (!contentState.hasText()) {
  //   if (contentState.getBlockMap().first().getType() !== 'unstyled') {
  //     className += ' RichEditor-hidePlaceholder';
  //   }
  // }
  
  let newHtml = stateToHTML(contentState);
  let updatedHtml = fixBreakLine(newHtml);
  setTimeout(() => handleHtml(updatedHtml), 0)

  return (
    <>
      <button onClick={_onBoldClick}>Bold</button>
      <Editor 
        editorState={editorState} 
        handleKeyCommand={handleKeyCommand} 
        onChange={setEditorState} 
      />
    </>
  )
}

export default TextEditor