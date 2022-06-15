import React from "react";
import Checkbox from "./Checkbox";
import "./Checkboxs.css";

export default class Checkboxs extends React.Component {
    state = {
        currentSelects: [],
        items: [
            { title: "Checkbox One", value: false },
            { title: "Checkbox Two", value: false },
            { title: "Checkbox Three", value: false },
        ],
    };

    handleCurrentSelects = (label, id, value) => {
        const thisElement = {
            title: label,
            id: id,
            value: !value,
        };
        //console.log(this.state.items);
        //console.log(thisElement);
        const currentArray = this.state.currentSelects;

        value
            ? currentArray.push(label)
            : currentArray.splice(currentArray.indexOf(label), 1);

        this.setState({
            currentSelects: currentArray,
            items: [thisElement, ...this.state.items],
        });
    };

    render() {
        const { currentSelects, items } = this.state;
        return (
            <div>
                {items.map((item, idx) => (
                    <Checkbox
                        label={item.title}
                        key={idx}
                        id={idx}
                        checked={item.value}
                        onChange={() => {
                            this.handleCurrentSelects(
                                item.title,
                                idx,
                                item.value
                            );
                        }}
                    />
                ))}
                <p className='current'>
                    <strong>Current Select :</strong>
                    {currentSelects.toString()}
                </p>
            </div>
        );
    }
}
