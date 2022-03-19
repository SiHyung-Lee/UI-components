import React, { useState } from "react";
import "./Radio.css";

const radioName = ["Radio One", "Radio Two", "Radio Three"];

const useRadios = (initIndex, allRadio) => {
    const [currentIndex, setCurrentIndex] = useState(initIndex);
    return {
        currentItem: allRadio[currentIndex],
        setCurrentItem: setCurrentIndex
    };
};

export default () => {
    const { currentItem, setCurrentItem } = useRadios(-1, radioName);
    return (
        <div>
            {radioName.map((name, idx) => (
                <span key={idx} className="radio">
                    <input
                        type="radio"
                        id={`radio${idx}`}
                        name="radio"
                        value={name}
                        onChange={() => setCurrentItem(idx)}
                    />
                    <label htmlFor={`radio${idx}`}>
                        {currentItem === "" ? "" : name}
                    </label>
                </span>
            ))}
            <p className="current">
                <strong>Current Select :</strong> {currentItem}
            </p>
        </div>
    );
};

/* class Radio extends Component {
  state = {
    currentValue: "",
    radioName: ["Radio One", "Radio Two", "Radio Three"]
  };

  handleChage = (e) => {
    this.setState({
      currentValue: e.target.value
    });
  };

  render() {
    const { currentValue, radioName } = this.state;
    return (
      <div>
        {radioName.map((name, idx) => (
          <span key={idx} className="radio">
            <input
              type="radio"
              id={`radio${idx}`}
              name="radio"
              value={name}
              onChange={this.handleChage}
            />
            <label htmlFor={`radio${idx}`}>{name}</label>
          </span>
        ))}
        <p className="current">
          <strong>Current Select :</strong> {currentValue}
        </p>
      </div>
    );
  }
}

export default Radio; */
