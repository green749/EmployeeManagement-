import { useState, useEffect, useRef } from "react";

function EmployeeForm({ addEmployee, editEmployee, updateEmployee }) {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');
    const nameInputRef = useRef(null);
    //console.log(name);

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    useEffect(() => {
        if (editEmployee) {
            setName(editEmployee.name);
            setDepartment(editEmployee.department);
            setSalary(editEmployee.salary);
        }
    }, [editEmployee]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) {
            alert('Please enter name');
            return;
        }
        if (!department) {
            alert('Please enter department');
            return;
        }
        if (!salary) {
            alert('Please enter salary');
            return;
        }

        if (editEmployee) {
            const updatedEmployee = {
                id: editEmployee.id,
                name: name,
                department: department,
                salary: Number(salary)
            }
            updateEmployee(updatedEmployee);
            setName('');
            setDepartment('');
            setSalary('');

            nameInputRef.current.focus();

        }
        else {
            const newEmployee = {
                id: Date.now(),
                name: name,
                department: department,
                salary: Number(salary)
            }
            addEmployee(newEmployee);
            setName('');
            setDepartment('');
            setSalary('');

            nameInputRef.current.focus();

        }
    }

    return (
        <form onSubmit={handleSubmit} className="card employee-frm">
            <h2>Add Employee</h2>
            <div>
                <label htmlFor="name">Name </label>
                <input placeholder="Enter name" ref={nameInputRef} value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" />
            </div>
            <div>
                <label htmlFor="department">Department </label>
                <input placeholder="Enter department" value={department} onChange={(e) => setDepartment(e.target.value)} type="text" id="department" />
            </div>
            <div>
                <label htmlFor="salary">Salary </label>
                <input placeholder="Enter salary" value={salary} onChange={(e) => setSalary(e.target.value)} type="number" id="salary" />
            </div>
            <button className="primary-button margin-top btn-full-width" type="submit">{editEmployee ? "Update Employee" : "Add Employee"}</button>
        </form>
    );
}
export default EmployeeForm;