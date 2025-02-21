import React from 'react';
import PropTypes from 'prop-types';
import { FaUser,FaEdit, FaPlus} from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { MdDeleteForever } from "react-icons/md";


const IconComponent = ({ iconType, iconSize=null, iconColor=null, iconStyle=null }) => {
  const icons = {
    userIcon: <FaUser size={iconSize} color={iconColor} className={iconStyle}/>,
    plusIcon: <FaPlus size={iconSize} color={iconColor} className={iconStyle}/>,
    crossIcon: <RxCross1 size={iconSize} color={iconColor} className={iconStyle}/>,
    editIcon: <FaEdit size={iconSize} color={iconColor} className={iconStyle}/>,
    deleteIcon: <MdDeleteForever size={iconSize} color={iconColor} className={iconStyle}/>,
  };
  return icons[iconType] || null;
};

// Define PropTypes for the component
IconComponent.propTypes = {
  iconType: PropTypes.oneOf([
    'userIcon',
    'plusIcon',
    'crossIcon',
    'editIcon',
    'deleteIcon',
  ]).isRequired,
  iconSize: PropTypes.string,
  iconColor: PropTypes.any,
  iconStyle: PropTypes.any,
};

export default IconComponent;