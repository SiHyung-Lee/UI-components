import React, { useState } from 'react'

export default (props) => {
    const [checked, setChecked] = useState()
    const { label, id, onChange } = props

    const handleChange = () => {
        setChecked(!checked)
    }

    return (
        <span className="checkbox">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={handleChange}
            />
            <label htmlFor={id}>{label}</label>
        </span>
    )
}
