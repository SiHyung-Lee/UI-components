import React from 'react'

export default (props) => {
    //handleCheck = () => {}

    const { label, id, value, onChange } = props
    return (
        <span className="checkbox">
            <input
                type="checkbox"
                id={id}
                checked={value}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </span>
    )
}
