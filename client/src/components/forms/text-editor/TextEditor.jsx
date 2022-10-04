import React from "react"
import { Editor, RichUtils } from "draft-js"
import {stateToHTML} from 'draft-js-export-html';
import fixBreakLine from '../../../helpers/fixBreakLine';
import { useConvertEditorState } from '../../../hooks/useConvertEditorState'
import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from './InlineStyleControls'

const TextEditor = ({ handleHtml, editValue }) => {
  const [editorState, setEditorState] = useConvertEditorState(editValue);

  const handleKeyCommand = ((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return "handled"
    }
    return "not-handled"
  })

  const handleToggleBlock = (style) => {
    const newBlockType = RichUtils.toggleBlockType(editorState, style);
    setEditorState(newBlockType);
  }

  function getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }
  
  const handleToggleInline = (style) => {
    const newInlineType = RichUtils.toggleInlineStyle(editorState, style);
    setEditorState(newInlineType);
  }

  let className = 'RichEditor-editor';
  let contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }
  
  let newHtml = stateToHTML(contentState);
  let updatedHtml = fixBreakLine(newHtml);
  setTimeout(() => handleHtml(updatedHtml), 0)

  return (
    <div className="RichEditor-root" focus="true">
      <BlockStyleControls
        editorState={ editorState }
        onToggle={ handleToggleBlock }
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={ handleToggleInline }
      />
      <div className={className} >
        <Editor 
          editorState={editorState} 
          handleKeyCommand={handleKeyCommand} 
          onChange={setEditorState} 
          placeholder="Tell a story..."
          spellCheck={true}
          blockStyleFn={getBlockStyle}
        />
      </div>
    </div>
  )
}

export default TextEditor