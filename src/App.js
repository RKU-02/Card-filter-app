import {useState,useEffect}from 'react';
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';


function App() {

  const [selectTeam, setTeam] = useState(" ");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "raj",
      position: "javascript Dev.",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "bbq",
      position: "web Dev.",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "zeel",
      position: "app Dev.",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 4,
      fullName: "patel",
      position: "soft Dev.",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 5,
      fullName: "miki",
      position: "devops Dev.",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "macy",
      position: "fontend Dev.",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "bob",
      position: "backend Dev.",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 8,
      fullName: "ankit",
      position: "j Dev.",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 9,
      fullName: "priya",
      position: "java Dev.",
      gender: "female",
      teamName: "TeamB",
    },
  ]);

  function handlechange(event) {
    setTeam(event.target.value);
    
  }

  function handleEmployeechange(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }
  return (
    <div>
     <Header selectTeam={selectTeam}
            teamMemberCount={employees.filter((employee)=>employee.teamName===selectTeam).length}/>
     <Employees employees={employees}
                selectTeam={selectTeam}
                handlechange={handlechange}
                handleEmployeechange={handleEmployeechange}/>
     <Footer/>
    </div>
  );
}

export default App;
