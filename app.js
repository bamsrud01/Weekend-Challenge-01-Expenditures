$(document).ready(function() {

  console.log('jQuery is ready!');

  $('#employee_info').on('submit', function(event) {
    event.preventDefault();

    var employee = {};

    var fields = $('#employee_info').serializeArray();
    //console.log('fields', fields);

    fields.forEach(function(element, index) {
      employee[element.name] = element.value;
    });
    console.log('employee object', employee);
    $('#employee_info').find('input[type="text"]').val('');
    appendDom(employee);
  });

  function appendDom(emp) {
    var $emp = $('<tr class="employee"></tr>');
    $emp.append(
    '<td>' + emp['first_name'] + '</td><td>' + emp['last_name'] + '</td><td>' + emp['id_number'] + '</td><td>' + emp['job_title'] + '</td><td>' + emp['salary'] + '</td>');
    $('#employee_data').append($emp);
  }

});
