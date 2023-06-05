function capitalizeText() {
  var inputText = document.getElementById('inputText');
  var selectedText = getSelectedText(inputText);
  var newText = selectedText.toUpperCase();
  replaceSelectedText(inputText, newText);
}

function lowercaseText() {
  var inputText = document.getElementById('inputText');
  var selectedText = getSelectedText(inputText);
  var newText = selectedText.toLowerCase();
  replaceSelectedText(inputText, newText);
}

function replaceText() {
  var inputText = document.getElementById('inputText');
  var textToReplace = document.getElementById('textToReplace').value;
  var replacementText = document.getElementById('replacementText').value;

  var selectedText = getSelectedText(inputText);
  var newText = selectedText.replace(textToReplace, replacementText);
  replaceSelectedText(inputText, newText);
}

function copyText() {
  var inputText = document.getElementById('inputText');
  inputText.select();
  document.execCommand('copy');
  alert('Text copied to clipboard!');
}

function getSelectedText(inputText) {
  return inputText.value.substring(inputText.selectionStart, inputText.selectionEnd);
}

function replaceSelectedText(inputText, newText) {
  var startIndex = inputText.selectionStart;
  var endIndex = inputText.selectionEnd;
  inputText.value = inputText.value.substring(0, startIndex) + newText + inputText.value.substring(endIndex);
  inputText.setSelectionRange(startIndex, startIndex + newText.length);
}

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey || event.metaKey) {
    document.getElementById('inputText').setAttribute('multiple', 'multiple');
  }
});

document.addEventListener('keyup', function(event) {
  if (!event.ctrlKey && !event.metaKey) {
    document.getElementById('inputText').removeAttribute('multiple');
  }
});
