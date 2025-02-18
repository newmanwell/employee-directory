import { Routes, Route } from "react-router-dom";

import EmployeeList from "./EmployeeList";


const App = () => {

  return (
    <>
      <h1>Testing</h1>
      <div>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
        </Routes>
      </div>
    </>
  )
}

export default App
