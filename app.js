$(document).ready(function() {

  //console.log('jQuery is ready!');

  var employeeSalaries = {};  //This object will hold employee names as properties, and salaries as values.
  var expense = 0;  //This will be the value displayed at the bottom of the page

  //This handles all the submission information
  $('#employee_info').on('submit', function(event) {
    event.preventDefault();
    var employee = {};
    var fields = $('#employee_info').serializeArray();
    fields.forEach(function(element, index) {
      employee[element.name] = element.value;
    });
    console.log('employee object', employee);
    $('#employee_info').find('input[type="text"]').val('');
    appendDom(employee);
  });

  //This handles how an employee is added to the list
  function appendDom(emp) {
    var $emp = $('<tr class="employee"></tr>');
    $emp.append(
    '<td class="employee_name">' + emp['first_name'] + '</td><td>' + emp['last_name'] + '</td><td>' + emp['id_number'] + '</td><td>' + emp['job_title'] + '</td><td>$' + emp['salary'] + '</td><td><button class="delete">Delete</button></td>');
    $('#employee_data').append($emp);
    employeeSalaries[emp['first_name']] = parseInt(emp['salary']);
    console.log(employeeSalaries);
    calculate();
  }

  //This handles how an employee is removed from the list
  $('#employee_data').on('click', '.delete', function() {
    var $row = $(this).closest('tr');
    var tempEmp = $row.find('.employee_name').text();
    delete employeeSalaries[tempEmp];
    console.log(employeeSalaries);
    $row = (this).closest('tr').remove();
    calculate();
  });



  function calculate() {
    expense = 0;
    for (var money in employeeSalaries) {
      expense += employeeSalaries[money];
    }
    expense = Math.round(expense * 100 / 12);
    $('#total').text('$' + expense / 100);
    console.log('Expense: ' + expense);
  };

});
