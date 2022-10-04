import React, { useRef } from "react"
import { Editor, getDefaultKeyBinding, RichUtils } from "draft-js"
import {stateToHTML} from 'draft-js-export-html';
import fixBreakLine from '../../../helpers/fixBreakLine';
import { useConvertEditorState } from '../../../hooks/useConvertEditorState'
import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from './InlineStyleControls'
import { useEffect } from "react";

const TextEditor = ({ handleHtml, editValue }) => {
  const [editorState, setEditorState] = useConvertEditorState(editValue);
  const ref = useRef(null)

  const focus = () => {
    if (ref) {
      ref.current.focus();
    }
  }

  useEffect(() => {
    ref.current.focus();
  }, [])

  const handleKeyCommand = ((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return "handled"
    }
    return "not-handled"
  })

  const keyBindingFunction = (e) => {
    return getDefaultKeyBinding(e);
  }

  const handleToggleBlock = (e, style) => {
    e.preventDefault();
    const newBlockType = RichUtils.toggleBlockType(editorState, style);
    setEditorState(newBlockType);
  }
  
  const handleToggleInline = (e, style) => {
    e.preventDefault();
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
    <div className="RichEditor-root" onClick={ () => ref.current.focus() }>
      <BlockStyleControls
        editorState={ editorState }
        onToggle={ handleToggleBlock }
      />
      <InlineStyleControls
        editorState={ editorState }
        onToggle={ handleToggleInline }
      />
      <div className={ className } >
        <Editor 
          editorState={ editorState } 
          handleKeyCommand={ handleKeyCommand } 
          keyBindingFn={ keyBindingFunction }
          onChange={ setEditorState } 
          placeholder="Tell a story..."
          spellCheck={ true }
          ref={ref}
          focus={focus}
        />
      </div>
    </div>
  )
}

export default TextEditor