import React, { createContext, useContext, useState } from 'react';

const EmployeesContext = createContext();

export const useEmployeesContext = () => {
  return useContext(EmployeesContext);
};

export const EmployeesProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const addSubmittedData = (data) => {
    setSubmittedData([...submittedData, data]);
  };

  const removeSubmittedData = (index) => {
    const newData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(newData);
  };

  const editEmployee = (index) => {
    setIsEditMode(true);
    setSelectedEmployee(submittedData[index]);
  };

  const updateEmployee = (updatedData) => {
    const updatedList = submittedData.map((data, index) =>
      index === selectedEmployee.index ? updatedData : data
    );
    setSubmittedData(updatedList);
    setSelectedEmployee(null);
    setIsEditMode(false);
  };

  return (
    <EmployeesContext.Provider
      value={{
        submittedData,
        addSubmittedData,
        removeSubmittedData,
        editEmployee,
        selectedEmployee,
        updateEmployee,
        isEditMode,
        setIsEditMode,
        setSubmittedData
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
