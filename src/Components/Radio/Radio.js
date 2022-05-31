import React, { useState } from "react";
import "./Radio.css";

const radioName = ["Radio One", "Radio Two", "Radio Three"];

const useRadios = (initIndex, allRadio) => {
    const [currentIndex, setCurrentIndex] = useState(initIndex);
    return {
        currentItem: allRadio[currentIndex],
        setCurrentItem: setCurrentIndex,
    };
};

export default () => {
    const { currentItem, setCurrentItem } = useRadios(-1, radioName);
    return (
        <div>
            {radioName.map((name, idx) => (
                <span key={idx} className='radio'>
                    <input
                        type='radio'
                        id={`radio${idx}`}
                        name='radio'
                        value={name}
                        onChange={() => setCurrentItem(idx)}
                    />
                    <label htmlFor={`radio${idx}`}>
                        {currentItem === "" ? "" : name}
                    </label>
                </span>
            ))}
            <p className='current'>
                <strong>Current Select :</strong> {currentItem}
            </p>
        </div>
    );
};
