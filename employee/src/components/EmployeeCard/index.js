import React from "react";
import "./style.css";

const cardTitle = "Employee Info"


function EmployeeCard(props) {
    return(
        <div>
        {props.employee.map(item => (
            <div className="card">
                <div className="card-header">
                    {cardTitle}
            </div>
                
                    <p className="card-text" key= {item.id}><strong>Name:</strong> {item.name}</p>
                    <p className="card-text"><strong>Position:</strong> {item.position}</p>
                    <p className="card-text"><strong>Department:</strong> {item.department}</p>
                    <p className="card-text"><strong>Salary:</strong> {item.pay}</p>
                    <p className="card-text"><strong>Email:</strong> {item.email}</p>
                    
               
            </div>
        ))}
        </div>
    )
}

export default EmployeeCard;