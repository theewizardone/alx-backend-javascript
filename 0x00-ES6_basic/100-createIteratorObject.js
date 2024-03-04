export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees); // Get all department employee arrays
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    next() {
      if (departmentIndex >= allEmployees.length) {
        return { done: true };
      }

      const currentDepartment = allEmployees[departmentIndex];
      if (employeeIndex >= currentDepartment.length) {
        departmentIndex++;
        employeeIndex = 0;
        return this.next(); // Recursively call next if department is empty
      }

      const employee = currentDepartment[employeeIndex];
      employeeIndex++;
      return { value: employee, done: false };
    },
  };
}

