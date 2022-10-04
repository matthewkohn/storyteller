import React from "react";

const StyleButton = ({ active, label, onToggle, style }) => {
  let className = 'RichEditor-styleButton';
  if (active) {
    className += ' RichEditor-activeButton';
  }

  return (
    <span className={className} onMouseDown={(e) => onToggle(e, style)}>
      {label}
    </span>
  );

}

export default StyleButton