import React from 'react';
import PropTypes from 'prop-types';
import IconComponent from "../../utils/IconComponents";

const InputField = ({type = 'text', name, value, placeholder, onChange, autoComplete = 'off', icon }) => {
  return (
    <span>
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            autoComplete={autoComplete}
            className="block w-full rounded-md py-1.5 pl-3 pr-20 bg-[var(--background)] text-[var(--foreground)] border border-gray-300  focus:ring-ring placeholder:text-gray-400  sm:text-sm sm:leading-6"
        />
        { icon && 
        <label>
            <IconComponent iconType={icon}/>
        </label>
        }
    </span>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  icon: PropTypes.elementType, // For rendering icon components
};

export default InputField;
