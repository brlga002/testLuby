import React from 'react';
import { Redirect } from 'react-router-dom';
import { resetState } from 'redux-localstore';

function Logout() {
  localStorage.removeItem('token');
  resetState();
  return <Redirect to="/login" />;
}

export default Logout;
