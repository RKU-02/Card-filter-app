

import maleimg from "./maleimg.png";
import femaleimg from "./femaleimg.png";

const Employees = ({employees,selectTeam,handlechange,handleEmployeechange}) => {
  
  return (
    <main className="container">
      <div className="row justify-contant-center mt-3 mb-3">
        <div className="col-8">
          <select
            className="form-select form-select-lg"
            name="select"
            value={selectTeam}
            onChange={handlechange}
          >
            <option value="select">select</option>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
          </select>
        </div>
      </div>
      <div className="row justify-contant-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collaction">
            {employees.map((employee) => {
              return (
                <div
                 key={employee.id}
                  id={employee.id}
                  className={`card m-2 ${
                    employee.teamName == selectTeam ? "standout" : ""
                  }`}
                  onClick={handleEmployeechange}
                >
                  {employee.gender === "male" ? (
                    <img src={maleimg} className="card-img-top" alt="..." />
                  ) : (
                    <img src={femaleimg} className="card-img-top" alt="..." />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">FullName:{employee.fullName}</h5>
                    <p className="card-text">
                      <b>Position:</b>
                      {employee.position}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
