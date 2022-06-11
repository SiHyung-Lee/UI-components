import React from "react";

export default (props) => {
    const { label, id, checked, onChange } = props;
    return (
        <span className='checkbox'>
            <input
                type='checkbox'
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </span>
    );
};
