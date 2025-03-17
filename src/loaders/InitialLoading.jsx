import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import loaderImage from '../assets/img/gfz_email_templete.svg';
import '../index.css';

const InitialLoading = ({ size = 500 }) => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <img
        src={loaderImage}
        alt="Loading..."
        className="rotating-image"
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
};

export default InitialLoading;
