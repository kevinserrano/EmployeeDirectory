
import './App.css';
import EmployeeCard from './components/EmployeeCard/index';
import Header from "./components/Header/index.js";
import employees from "./seeder/employee.json";



function App() {
  return (
    <div>
    <Header/>
    <EmployeeCard employee = {employees}/>
    </div>
  );
}


export default App;
