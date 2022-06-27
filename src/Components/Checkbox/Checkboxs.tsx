import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import './Checkboxs.css';

const items = ['Checkbox One', 'Checkbox Two', 'Checkbox Three'];

export default () => {
    const [selects, setSelects] = useState([]);

    const updateSelects = (label: string, value: boolean) => {
        let arraySelects = [...selects];
        console.log(label);
        value
            ? arraySelects.push(label)
            : arraySelects.splice(arraySelects.indexOf(label), 1);

        setSelects(arraySelects);
    };

    return (
        <div className="checkList">
            {items.map((item, idx) => (
                <Checkbox
                    label={item}
                    key={idx}
                    id={idx}
                    updateSelects={updateSelects}
                />
            ))}
            <p className="current">
                <strong>Current Select :</strong>
                {selects.toString()}
            </p>
        </div>
    );
};
