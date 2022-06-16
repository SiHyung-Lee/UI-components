import React, { useState } from 'react'
import Checkbox from './Checkbox'
import './Checkboxs.css'

export default () => {
    const [currentSelects, setCurrentSelects] = useState()
    const [items, setItems] = useState([
        'Checkbox One',
        'Checkbox Two',
        'Checkbox Three',
    ])

    const handleCurrentSelects = () => {}

    return (
        <div>
            {items.map((item, idx) => (
                <Checkbox label={item.title} key={idx} id={idx} />
            ))}
            <p className="current">
                <strong>Current Select :</strong>
                {currentSelects.toString()}
            </p>
        </div>
    )
}
