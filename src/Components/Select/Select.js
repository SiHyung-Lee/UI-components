import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Select.css";

const items = ["Select One", "Select Two", "Select Three"];

const useSelect = (initIndex, allSelect) => {
  const [currentIndex, setCurrentIndex] = useState(initIndex);
  return {
    currentItem: allSelect[currentIndex],
    setCurrentItem: setCurrentIndex
  };
};

const handleSelect = (e) => {
  const selectContainer = e.target.closest(".select");
  selectContainer.classList.toggle("actived");
};

export default () => {
  const { currentItem, setCurrentItem } = useSelect(-1, items);
  return (
    <>
      <div className="select">
        <button type="button" className="select-toggle" onClick={handleSelect}>
          {!currentItem ? "Select Here" : currentItem}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={(e) => {
                  setCurrentItem(idx);
                  handleSelect(e);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="current">
        <strong>Current Select :</strong> {currentItem}
      </p>
    </>
  );
};

/* class Select extends React.Component {
    state = {
        current: "Select Here",
        items: ["Select One", "Select Two", "Select Three"],
        exposure: ""
    };

    handleSelect = () => {
        this.setState({
            exposure: this.state.exposure === "" ? "actived" : ""
        });

        document.addEventListener("click", (e) => {
            if (e.target.parentNode.className !== "select actived") {
                this.setState({
                    exposure: ""
                });
            }
        });
    };

    handleItemSelect = (e) => {
        const text = e.target.innerText;

        this.setState({
            current: text,
            exposure: ""
        });
    };

    render() {
        const { current, items, exposure } = this.state;
        return (
            <>
                <div className={`select ${exposure}`}>
                    <button onClick={this.handleSelect}>
                        {current}
                        <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                    <ul>
                        {items.map((item, idx) => (
                            <li key={idx} onClick={this.handleItemSelect}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="current">
                    <strong>Current Select :</strong> {current}
                </p>
            </>
        );
    }
}

export default Select; */
