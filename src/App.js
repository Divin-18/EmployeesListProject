import './App.css';
import EmployeesDetail from './Components/EmployeesDetailForm/EmployeesDetail';
import { EmployeesProvider } from './Context/EmployeeContext';

function App() {
  return (
    <EmployeesProvider>
     <EmployeesDetail/>
    </EmployeesProvider>
  );
}

export default App;
