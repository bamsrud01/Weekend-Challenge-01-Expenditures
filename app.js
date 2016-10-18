var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', function () {
  console.log('App loaded');

  var self = this;
  var employeeSalaries = {};  //  This object will hold employee IDs as properties, and salaries as values.
  self.expense = 0;            //  This will be the value displayed at the bottom of the page
  self.allEmployees = [];      //  To hold all employees for angular

  //  Submission of employee info
  self.createEmployee = function () {
    console.log('Submitted employee:', self.employee);
    //  Make a copy of the object instead of storing the object itself
    self.allEmployees.push(angular.copy(self.employee));
    console.log(self.allEmployees);
    employeeSalaries[self.employee.id] = parseFloat(self.employee.salary);
    console.log('ID and salaries:', employeeSalaries);
    calculate();
    self.employee = {};
  };

  //  Calculate expense
  function calculate() {
    self.expense = 0;
    for (var money in employeeSalaries) {
      self.expense += employeeSalaries[money];
    }
    self.expense = self.expense / 12;
    return (self.expense = '$' + self.expense.toFixed(2));
  }

  self.deleteEmployee = function(index) {
    var person = self.allEmployees[index].id;
    self.allEmployees.splice(index, 1);
    console.log('Index:', person);
    delete employeeSalaries[person];
    console.log('Salaries', employeeSalaries);
    calculate();
  }

});
