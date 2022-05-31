import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Select.css";

const items = ["Select One", "Select Two", "Select Three"];

const useSelect = (initIndex: number, allSelect: string[]) => {
    const [currentIndex, setCurrentIndex] = useState(initIndex);
    return {
        currentItem: allSelect[currentIndex],
        setCurrentItem: setCurrentIndex,
    };
};

const handleSelect = (event: any) => {
    const selectContainer = event.target.closest(".select");
    selectContainer.classList.toggle("actived");
};

export default () => {
    const { currentItem, setCurrentItem } = useSelect(-1, items);
    return (
        <>
            <div className='select'>
                <button
                    type='button'
                    className='select-toggle'
                    onClick={handleSelect}>
                    {!currentItem ? "Select Here" : currentItem}
                    <FontAwesomeIcon icon={faAngleDown} />
                </button>
                <ul>
                    {items.map((item, idx) => (
                        <li key={idx}>
                            <button
                                type='button'
                                onClick={(e) => {
                                    setCurrentItem(idx);
                                    handleSelect(e);
                                }}>
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <p className='current'>
                <strong>Current Select :</strong> {currentItem}
            </p>
        </>
    );
};
