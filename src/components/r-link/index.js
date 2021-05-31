import React from 'react';
import { Link } from 'react-router-dom';

const RLink = ({ to, prefix, suffix, children, className, ...others }) => {
  const wrapClasses = ['r-link', className].filter(Boolean).join(' ');

  return (
    <Link className={wrapClasses} to={to} {...others}>
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {suffix && <span className="suffix">{suffix}</span>}
    </Link>
  );
};

export default RLink;
