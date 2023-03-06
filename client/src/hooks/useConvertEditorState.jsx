import { useState, useEffect } from "react";
import { ContentState, EditorState, convertFromHTML } from "draft-js";

export const useConvertEditorState = (string) => {
  const [editorState, setEditorState] = useState(calcState(string));

  useEffect(() => {
    setEditorState(calcState(string));
  }, [string]); 

  return [editorState, setEditorState];
}

const calcState = (string) => {
  if (!string) {
    return EditorState.createEmpty();
  } else {
    const blocksFromHTML = convertFromHTML(string)
    let newState = ContentState.createFromBlockArray(blocksFromHTML)
    return EditorState.createWithContent(newState)
  }
}