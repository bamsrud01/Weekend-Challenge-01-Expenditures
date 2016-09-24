#Weekend Challenge 01 - Expenditures


###This challenge was to create an application to record data of employees.  

The collected data included name, ID, title, and annual salary.  Using jQuery, the annual salaries were calculated to provide the total monthly expenditure of the company.  The employee data was collected through an HTML form that automatically clears when the form is submitted.  All employee data was appended to a table below the form.

Additionally, I completed two challenges:

#####Hard Mode:
Hard Mode was to create a delete button that removes an employee from the DOM.  When the button is clicked, the entire table row that was created is removed from the DOM.

#####Pro Mode:
Pro Mode was to update the total salary expenditure when an employee is removed from the DOM.  This was accomplished by creating an object holding employee names as properties, and employee salaries as values.  When an employee is submitted, they are added to the object.  When an employee is deleted, they are removed from the object.  The expenditure is calculated each time an employee is added or removed using a for/in loop.
