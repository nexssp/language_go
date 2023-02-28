module.exports = {
  '\:(?<line>.*?):(?<column>.*?)\: syntax error\: unexpected newline in argument list\; possibly missing comma or':
    "You may missed a comma at the end of the line: <line> or remove next line to have ) at the end." // Testing error messages in go.
};
