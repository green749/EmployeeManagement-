import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CompanyInfo from './components/CompanyInfo';
import EmployeeList from './components/EmployeeList';
import EmployeeCard from './components/EmployeeCard';
import { useState, useContext, useMemo, useCallback, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import ThemeContext from './context/ThemeContext';
import SearchEmployee from "./components/SearchEmployee";
import ArrowCard from "./components/DraggableCards";
function App() {

  const [employeeDetails, setEmployeeDetails] = useState(() => {
    try {
      const savedEmployees = localStorage.getItem('employees');
      return savedEmployees ? JSON.parse(savedEmployees) : [];
    } catch (error) {
      console.error('Unable to load employees from local storage:', error);
      return [];
    }
  });
  const [editEmployeedetails, setEditEmployeedetails] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employeeDetails));
  }, [employeeDetails]);


  const filteredEmployees = useMemo(() => {

    // console.log("Filtering Employees...");

    return employeeDetails.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );

  }, [employeeDetails, search]);

  /* function addEmployee(employee){
   //console.log(employee);
   setEmployeeDetails([...employeeDetails,employee]);
  }*/

  const addEmployee = useCallback((employee) => {
    setEmployeeDetails((prev) => [...prev, employee]);
  }, []);

  /*function deleteEmployee(id){
   //console.log(id);
   setEmployeeDetails(employeeDetails.filter(
     (employee)=>employee.id !== id
   ));
  }*/

  const deleteEmployee = useCallback((id) => {
    setEmployeeDetails(prev =>
      prev.filter(employee => employee.id !== id));

  }, []);

  const editEmployee = useCallback((employee) => {
    setEditEmployeedetails(employee);
  }, []);

  const updateEmployee = useCallback((updatedEmployee) => {
    setEmployeeDetails(prev =>
      prev.map(employee =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setEditEmployeedetails(null);
  }, []);

  const { theme } = useContext(ThemeContext);


  return (
    <div className={theme} >
      
      <Navbar />
      <div className='main'>
      <Hero totalEmployees={employeeDetails.length}/>
      <div className="two-ele employee">
        <div className="employee-left">
          <SearchEmployee search={search} setSearch={setSearch} />
          <EmployeeList deleteEmployee={deleteEmployee} employees={filteredEmployees} editEmployee={editEmployee} />
        </div>
        <EmployeeForm addEmployee={addEmployee} editEmployee={editEmployeedetails} updateEmployee={updateEmployee} />

      </div>
      </div>
      
      <Footer />
    </div>
  );
}


export default App;
