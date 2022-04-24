import React from 'react';

function FormGroup({label, error, errorMessage, children}) {
    return (
        <div className={`form-group ${error ? 'form-group--error' : ''}`}>
            <label>{label}</label>
            {children}
            {error && <p className="form-error">{errorMessage}</p>}
        </div>
    );
}

export default FormGroup;
