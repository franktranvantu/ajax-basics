// Add a conditional statement inside the onreadystatechange event handler that
// tests to make sure the server has sent back its complete response.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

};
xhr.open('GET', 'sidebar.html');
xhr.send();
