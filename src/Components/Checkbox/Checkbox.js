import React, { useState } from 'react';

export default ({ label, id, updateSelects }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        updateSelects(label, !checked);
    };

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
    );
};
