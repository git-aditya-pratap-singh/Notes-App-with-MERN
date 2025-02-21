import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProctedRouteGuard = ({ children }) => {
  const userToken = localStorage.getItem('tokens');
  const token = userToken ? userToken : null;
  if (!token) {
    return <Navigate to="/" />;  
  }
  return children;
};

const IsloginGuard = ({ children }) =>{
  const isUserToken  = localStorage.getItem('tokens');
  console.log(isUserToken)
  const isToken = isUserToken ? isUserToken : null;
  if(isToken){
    return <Navigate to="/dashboard" />;   
  }
  return children;
}

ProctedRouteGuard.propTypes = {
  children: PropTypes.node.isRequired
};

IsloginGuard.propTypes = {
  children: PropTypes.node.isRequired
};

export {ProctedRouteGuard, IsloginGuard};