import React from "react";

export default (props: any) => {
    const { label, id, value, onChange } = props;
    console.log(props);
    return (
        <span className='checkbox'>
            <input
                type='checkbox'
                id={id}
                checked={value}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </span>
    );
};
