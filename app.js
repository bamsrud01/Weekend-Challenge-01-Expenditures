$(document).ready(function() {

  //console.log('jQuery is ready!');

  var employeeSalaries = {};  //This object will hold employee IDs as properties, and salaries as values.
  var expense = 0;  //This will be the value displayed at the bottom of the page

  //This handles all the submission information
  $('#employee_info').on('submit', function(event) {
    event.preventDefault();
    var employee = {};    //This object will hold the submitted user information
    var fields = $('#employee_info').serializeArray();
    fields.forEach(function(element, index) {
      employee[element.name] = element.value;
    });
    $('#employee_info').find('input[type="text"]').val('');
    $('#employee_info').find('input[type="number"]').val('');
    appendDom(employee);
  });

  //This handles how an employee is added to the list
  function appendDom(emp) {
    var $emp = $('<tr class="employee"></tr>');
    $emp.append(
    '<td>' + emp['first_name'] + '</td><td>' + emp['last_name'] + '</td><td class="employee_id">' + emp['id_number'] + '</td><td>' + emp['job_title'] + '</td><td>$' + emp['salary'] + '</td><td><button class="delete">Delete</button></td>');
    $('#employee_data').append($emp);
    employeeSalaries[emp['id_number']] = parseFloat(emp['salary']);
    calculate();
  }

  //This handles how an employee is removed from the list
  $('#employee_data').on('click', '.delete', function() {
    var $row = $(this).closest('tr');
    var tempEmp = $row.find('.employee_id').text();   //This variable finds the employee ID.
    delete employeeSalaries[tempEmp];   //Here, the employee id found in line 33 is used to remove the employee from the employeeSalaries object, allowing an accurate calculation
    $(this).closest('tr').remove();
    calculate();
  });


  //Calculates the salary, using the employeeSalaries object.
  function calculate() {
    expense = 0;
    for (var money in employeeSalaries) {
      expense += employeeSalaries[money];
    }
    expense = expense / 12;
    $('#total').text('$' + expense.toFixed(2));
    // expense = Math.round(expense * 100 / 12);  //I multiplied by 100 and divided by 12 to keep the 2 decimal places after rounding.
    // $('#total').text('$' + expense / 100);  //The rounded number is divided by 100.
  };

});
