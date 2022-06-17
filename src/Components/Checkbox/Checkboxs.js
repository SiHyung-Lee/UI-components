import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import './Checkboxs.css';

const items = ['Checkbox One', 'Checkbox Two', 'Checkbox Three'];

export default () => {
    const [selects, setSelects] = useState([]);

    const updateSelects = (label, value) => {
        let arraySelects = selects;

        value
            ? arraySelects.push(label)
            : arraySelects.splice(arraySelects.indexOf(label), 1);

        setSelects(arraySelects);
        console.log(selects);
    };

    useEffect(() => {
        //console.log(selects);
    });

    return (
        <div className="checkboxs">
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
