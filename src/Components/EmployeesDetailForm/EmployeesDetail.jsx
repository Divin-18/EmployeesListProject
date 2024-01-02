import React,{ useState ,useEffect}from 'react'
import { useEmployeesContext } from '../../Context/EmployeeContext';
import './EmployeesDetail.css'

const EmployeesDetail = () => {
  const {
    submittedData,
    addSubmittedData,
    selectedEmployee,
    isEditMode,
    setIsEditMode,
    setSubmittedData,
  } = useEmployeesContext();

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    thirdName: '',
    gender: '',
    phoneNumber: '',
    contactModes: {
      email: false,
      phone: false,
    },
    maritalStatus: '',
    immediateJoiner: '',
  });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        contactModes: {
          ...formData.contactModes,
          [name]: checked,
        },
      });
    } else if (name === 'maritalStatus' || type === 'radio') {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      middleName: '',
      thirdName: '',
      gender: '',
      phoneNumber: '',
      contactModes: {
        email: false,
        phone: false,
      },
      maritalStatus: '',
      immediateJoiner: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (isEditMode) {
      const updatedData = submittedData.map((employee) =>
        employee === selectedEmployee ? formData : employee
      );
      setSubmittedData(updatedData);
      handleClear();
      setIsEditMode(false);
    } else {
      addSubmittedData(formData);
      handleClear();
    }
  };


  return (
    <div>
      <h2>Employees Form</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label >Last Name:</label>
          <input
            type="text"
            name="thirdName"
            value={formData.thirdName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="others"
              checked={formData.gender === 'others'}
              onChange={handleInputChange}
            />
            Others
          </label>
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Mode of contact:</label>
          <label>
            <input
              type="checkbox"
              name="email"
              checked={formData.contactModes.email}
              onChange={handleInputChange}
            />
            Email
          </label>
          <label>
            <input
              type="checkbox"
              name="phone"
              checked={formData.contactModes.phone}
              onChange={handleInputChange}
            />
            Phone
          </label>
        </div>
        <div>
          <label>Marital Status:</label>
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div>
          <label>Immediate joiner:</label>
          <label>
            <input
              type="radio"
              name="immediateJoiner"
              value="Yes"
              checked={formData.immediateJoiner === 'Yes'}
              onChange={handleInputChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="immediateJoiner"
              value="No"
              checked={formData.immediateJoiner === 'No'}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
        <div>
        <button type="submit">{isEditMode ? 'Update' : 'Submit'}</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default EmployeesDetail;
