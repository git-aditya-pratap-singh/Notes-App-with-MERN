import React from 'react';
import PropTypes from 'prop-types';

const TextAreaField = ({ name, value, onChange, placeholder, rows }) => {
  return (
        <div className="relative mt-2 rounded shadow-sm w-full">
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="resize-none block w-full rounded-md py-1.5 pl-3 pr-20 bg-[var(--background)] text-[var(--foreground)] border border-gray-300  focus:ring-ring placeholder:text-gray-400  sm:text-sm sm:leading-6"
                rows={rows}
            >
            </textarea>
        </div>
  );
};

TextAreaField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired
};

export default TextAreaField;