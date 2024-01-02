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

  const deleteSubmittedData = (index) => {
    const newData = [];
    for (let i = 0; i < submittedData.length; i++) {
      if (i !== index) {
        newData.push(submittedData[i]);
      }
    }
    setSubmittedData(newData);
  };

  const editEmployee = (index) => {
    setIsEditMode(true);
    setSelectedEmployee(submittedData[index]);
  };


  return (
    <EmployeesContext.Provider
      value={{
        submittedData,
        addSubmittedData,
        deleteSubmittedData,
        editEmployee,
        selectedEmployee,
        isEditMode,
        setIsEditMode,
        setSubmittedData
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
