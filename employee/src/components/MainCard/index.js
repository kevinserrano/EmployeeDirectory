import React, {Component} from "react";
import Header from "../Header";
import EmployeeCard from "../EmployeeCard";
import ButtonCard from "../ButtonCard";
import employee from "../../seeder/employee.json";



class Main extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.viewAllEmployees()
    };
    
    viewAllEmployees = event => {
        this.setState({results: employee})

    }

   callAdmin = event => {
        event.preventDefault();
        const val = "Admin";
        let oneEmployee = [];
        for (var i = 0; i < employee.length; i++) {
            if (employee[i].department === val){
                oneEmployee.push(employee[i])
            }
        }
        this.setState({results: oneEmployee})
    };
   callCoders = event => {
        event.preventDefault();
        const val = "Coding";
        let oneEmployee = [];
        for (var i = 0; i < employee.length; i++) {
            if (employee[i].department === val){
                oneEmployee.push(employee[i])
            }
        }
        this.setState({results: oneEmployee})
    };

    sortEmployeePay = event => {
        event.preventDefault();
        let oldPay = []
        for(var i = 0; i < employee.length; i++) {
            oldPay.push(employee[i])
        }
        let newPay = oldPay.sort((a, b) => {
            return b.pay - a.pay;
        });
        this.setState({results: newPay})
    };

render() {
    return (
        <div className = "entirePage">
            {this.viewAllEmployees} 
            <Header/>
            <ButtonCard empName="View All" className="btn btn-primary" action={this.viewAllEmployees}/>
            <ButtonCard empName="Sort by Pay" className="btn btn-primary" action={this.sortEmployeePay}/>
            <ButtonCard empName="All Admin" className="btn btn-primary" action={this.callAdmin}/>
            <ButtonCard empName="All Coders" className="btn btn-primary" action={this.callCoders}/>
            <EmployeeCard employee= {this.state.results}/>

        </div>
    )
}
};

export default Main;