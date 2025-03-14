/** 
 * Truncates a given text to a specified maximum length and appends '...' if truncated.
 *
 * @param {string} txt - The text to be truncated.
 * @param {number} [maxLength=50] - The maximum length of the text before truncation. Defaults to 50.
 * @returns {string} The truncated text with '...' appended if it exceeds the maxLength.
 **/
export function TxtSlice(txt:string, maxLength:number = 50) {
  if (txt.length > maxLength) {
    return txt.slice(0, maxLength) + "...";
  }
  return txt;
}
