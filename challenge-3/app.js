// In the conditional statement you just created, also test to make sure the return status from the server is OK.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {

  }
};
xhr.open('GET', 'sidebar.html');
xhr.send();
