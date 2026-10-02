import React from "react";

function EmployeeCard({deleteEmployee,employee,editEmployee}){
   
    const colors = [
  { bg: "#f7c5da", text: "#c2185b" }, 
  { bg: "#cfdeb8", text: "#4b7f2a" }, 
  { bg: "#ffe2b8", text: "#c97a00" },
  { bg: "#b6d1e6", text: "#1565c0" }, 
  { bg: "#d4c6e4", text: "#6a1b9a" }  
];

    const color=colors[employee.name.charCodeAt(0) % colors.length];
     console.log("Rendering:", employee.name);
    return(
        
        <div className="card employee-card margin-top-lg ">
            <div className="two-ele">
            <span className="user-icon two-ele" style={{ backgroundColor: color.bg,color:color.text }} >{employee.name.charAt(0).toUpperCase()}</span>
            <div><h3>{employee.name}</h3>
            <p className="margin-top">{employee.department}</p>
            <p className="primary-text margin-top">₹{employee.salary}</p>
            </div>
            </div>

            <div className="two-ele">
            <button type="button" class="secondary-button" onClick={() => deleteEmployee(employee.id)}>Delete</button>
            <button type="button" class="danger-btn" onClick={()=>editEmployee(employee)}>Update</button>
            </div>
        
        </div>
    );
}

export default React.memo(EmployeeCard);