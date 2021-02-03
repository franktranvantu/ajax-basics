Program your first AJAX request using JavaScript. 

You'll use AJAX to load HTML into a div tag on a web page.

1. Create an XMLHttpRequest object

    ```
    var xhr = new XMLHttpRequest();
   ```
2. Create a callback function

    ```
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
       document.getElementById('ajax').innerHTML = xhr.responseText;
     }
   };
   ```
3. Open a request

    ```
   xhr.open('GET', 'sidebar.html');
   ```
4. Send the request

    ```
   xhr.send();
   ```