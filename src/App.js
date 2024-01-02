import './App.css';
import DisplayEmployeesInfo from './Components/DisplayEmployeesInfo/DisplayEmployeesInfo';
import EmployeesDetail from './Components/EmployeesDetailForm/EmployeesDetail';
import { EmployeesProvider } from './Context/EmployeeContext';

function App() {
  return (
    <EmployeesProvider>
      <div>
     <EmployeesDetail/>
     <DisplayEmployeesInfo  />
     </div>
    </EmployeesProvider>
  );
}

export default App;
