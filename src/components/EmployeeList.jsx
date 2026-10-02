import EmployeeCard from './EmployeeCard';
import ArrowCard from'./DraggableCards';


function EmployeeList({deleteEmployee,employees,editEmployee}) {

      console.log(employees,'from parent');
    return (

        <div className={`card employee-list ${employees.length === 0 ? "empty" : ""}`}>
            
            <h2>Employee List</h2>
            <ArrowCard deleteEmployee="deleteEmployee" employees={employees} editEmployee="editEmployee"/>
            
        </div>
    );
}

export default EmployeeList;