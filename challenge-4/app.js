// Now that the server has responded with the data, you need to add it to the page.
// First select the div with the ID of 'sidebar'.
// You can select page elements with IDs like this: document.getElementById('idName');
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {

    }
  }
};
xhr.open('GET', 'sidebar.html');
xhr.send();
