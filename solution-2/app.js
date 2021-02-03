// In app.js, we've added an AJAX callback function.
// You need to complete the request.
// Add the code to open the AJAX request using the GET method and pointing to the 'footer.html' file.
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById('footer').innerHTML = request.responseText;
  }
};
request.open('GET', 'footer.html');