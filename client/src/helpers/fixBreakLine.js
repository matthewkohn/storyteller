// This closes any break lines generated by DraftJS

const fixBreakLine = (html) => {
  const brRegex = /(<br>)/g;
  const newHtml = html.replace(brRegex, '<br/>');
  return newHtml;
}

export default fixBreakLine