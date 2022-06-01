import React from "react";
import Checkbox from "./Checkbox";
import "./Checkboxs.css";

export default class Checkboxs extends React.Component {
    state = {
        currentSelects: [],
        items: ["Checkbox One", "Checkbox Two", "Checkbox Three"],
    };

    handleCurrentSelects = (label: never, value: string) => {
        let currentArray = this.state.currentSelects;
        console.log(this);
        value
            ? currentArray.push(label)
            : currentArray.splice(currentArray.indexOf(label), 1);

        this.setState({
            currentSelects: currentArray,
        });
    };

    render() {
        const { currentSelects, items } = this.state;
        return (
            <div>
                {items.map((item, idx) => (
                    <Checkbox
                        label={item}
                        key={idx}
                        id={idx}
                        onChange={this.handleCurrentSelects}
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
