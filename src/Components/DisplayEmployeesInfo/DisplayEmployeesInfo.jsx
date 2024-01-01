import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEmployeesContext } from '../../Context/EmployeeContext';
import './DisplayEmployeesInfo.css'

const DisplayEmployeesInfo = () => {
  const { submittedData, removeSubmittedData,editEmployee } = useEmployeesContext();

  const handleDelete = (index) => {
    removeSubmittedData(index);
  };


  return (
    <div>
       {submittedData.length > 0 && (
        <div>
          <h3>Submitted Details</h3>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Third Name</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Email Contact</th>
                <th>Phone Contact</th>
                <th>Marital Status</th>
                <th>Immediate Joiner</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.firstName}</td>
                  <td>{data.middleName}</td>
                  <td>{data.thirdName}</td>
                  <td>{data.gender}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.contactModes.email ? 'Yes' : 'No'}</td>
                  <td>{data.contactModes.phone ? 'Yes' : 'No'}</td>
                  <td>{data.maritalStatus}</td>
                  <td>{data.immediateJoiner}</td>
                  <td>
                  <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => editEmployee(index)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default DisplayEmployeesInfo;
