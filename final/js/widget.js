var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // console.log(typeof xhr.responseText);
    var employees = JSON.parse(xhr.responseText);
    console.log(employees);
    var staticHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].inoffice) {
        staticHTML += '<li class="in">';
      } else {
        staticHTML += '<li class="out">';
      }
      staticHTML += employees[i].name;
      staticHTML += '</li>';
    }
    staticHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = staticHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();