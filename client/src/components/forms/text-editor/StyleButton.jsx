import React from "react";

const StyleButton = ({ active, label, onToggle }) => {
  let className = 'RichEditor-styleButton';
  if (active) {
    className += ' RichEditor-activeButton';
  }

  return (
    <span className={className} onMouseDown={onToggle}>
      {label}
    </span>
  );

}

export default StyleButton