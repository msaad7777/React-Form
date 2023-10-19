import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmployeeRegistrationForm from './EmployeeRegistrationForm'; // Import your form component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmployeeRegistrationForm /> {/* Render your form component */}
  </React.StrictMode>,
);

reportWebVitals();

