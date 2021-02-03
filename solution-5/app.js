// Now use a DOM element's innerHTML property to set the HTML inside the sidebar div to the server's response.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      document.getElementById('sidebar').innerHTML = xhr.responseText;
    }
  }
};
xhr.open('GET', 'sidebar.html');
xhr.send();
