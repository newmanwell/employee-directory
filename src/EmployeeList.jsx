import { useEffect } from "react";

const EmployeeList = () => {
  useEffect(() => {
    const getEmployees = async() => {
      const response = await fetch('https://employee-directory-mbdh.onrender.com/employees');
      console.log(response);
    }
    getEmployees();
  })
  return (
    <h2>Listed!</h2>
  )
}

export default EmployeeList;