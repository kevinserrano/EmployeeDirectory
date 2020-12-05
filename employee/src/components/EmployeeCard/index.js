import React from "react";
import "./style.css";

const cardTitle = "Employee Info"


function EmployeeCard(props) {
    return(
        <div>
        {props.employee.map(item => (
            <div class="card">
                <div class="card-header">
                    {cardTitle}
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" key= {item.id}><strong>Name:</strong> {item.name}</li>
                    <li class="list-group-item"><strong>Position:</strong> {item.position}</li>
                    <li class="list-group-item"><strong>Department:</strong> {item.department}</li>
                    <li class="list-group-item"><strong>Salary:</strong> {item.pay}</li>
                    <li class="list-group-item"><strong>Email:</strong> {item.email}</li>
                    
                </ul>
        </div>
        ))}
        </div>
    )
}

export default EmployeeCard;