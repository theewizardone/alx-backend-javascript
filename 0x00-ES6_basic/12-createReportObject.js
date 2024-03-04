export default function createReportObject(employeesList) {
  const allEmployees = {};

  // Group employees by department using spread syntax and object destructuring
  for (const { department, name } of employeesList) {
    allEmployees[department] = allEmployees[department] || [];
    allEmployees[department].push(name);
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}

