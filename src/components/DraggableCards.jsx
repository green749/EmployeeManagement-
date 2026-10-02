import { useRef, useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";

//const cards = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, title: `Card ${i+1}` }));

export default function ArrowCard({ deleteEmployee, employees, editEmployee }) {
 
  const wrapperRef = useRef(null);
  const scrollRef = useRef(null);
  const[selectedDepartment,setSelectedDepartment]=useState("All");


  const department = [
    "All",
    ...new Set(
        employees.map(employee =>
            employee.department.trim().toLowerCase()
        )
    )
];
const filteredEmployees =
  selectedDepartment === "All"
    ? employees
    : employees.filter(
        employee =>
          employee.department.trim().toLowerCase() === selectedDepartment
      );
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(20);

  const colors = [
    "bg-blue-700", "bg-blue-600", "bg-blue-500", "bg-sky-500", "bg-cyan-500"
  ];

  
  const onDown = (e) => {
    e.preventDefault();
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onMove = (e) => {
    if (!dragging) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const min = 20;
    const max = rect.width - 40;
    let x = e.clientX - rect.left;
    x = Math.max(min, Math.min(max, x));
    setPosition(x);

    const progress = (x - min) / (max - min);
    const el = scrollRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollLeft = progress * maxScroll;
  };

  const stop = () => setDragging(false);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, []);

  console.log(selectedDepartment);
  return (
    <div
      ref={wrapperRef}
      onPointerMove={onMove}
      onPointerUp={stop}
      onPointerLeave={stop}
      className="relative w-[900px] h-[320px] rounded-xl overflow-hidden p-6"
    >
      <div
        className="absolute left-5 top-10 flex items-center"
        style={{ width: position }}
      >
        {Array.from({ length: Math.floor(position / 8) }).map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full mr-[2px] ${colors[i % colors.length]}`} />
        ))}
      </div>

      <div
        onPointerDown={onDown}
        className="absolute top-7 text-3xl cursor-ew-resize select-none touch-none"
        style={{ left: position }}
      >
       {[...department].map((dept) => (
    <button className={`department ${
      selectedDepartment === dept ? "active-department" : ""
    }`} key={dept} onClick={(e) => {
  e.stopPropagation();
  setSelectedDepartment(dept);
}}>
        {dept.toUpperCase()} 
    </button>
))}
      </div>

      <div
        ref={scrollRef}
        className="absolute left-0 right-0 top-24 px-6 overflow-x-hidden"
      >
        <div className="flex gap-4 w-max">
          {employees.length === 0 ? <div>NO Employee</div> :
            filteredEmployees.map((employee) => (

              <EmployeeCard

                key={employee.id}
                employee={employee}
                deleteEmployee={deleteEmployee}
                editEmployee={editEmployee}

              />

            ))
          }
        </div>
      </div>
    </div>
  );
}
