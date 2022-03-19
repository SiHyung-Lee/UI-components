import React from "react";
import Tab from "./Components/Tab/Tab";
import Select from "./Components/Select/Select";
import Radio from "./Components/Radio/Radio";
import Checkboxs from "./Components/Checkbox/Checkboxs";
import Accordion from "./Components/Accordion/Accordion";
import Modal from "./Components/Modal/Modal";
import "./styles.css";

export default () => {
  return (
    <div className="App">
      <h1>React UI Components</h1>
      <h2>Checkboxs</h2>
      <Checkboxs />
      <h2>TAB</h2>
      <Tab />
      <h2>Select</h2>
      <Select />
      <h2>Radio</h2>
      <Radio />
      <h2>Accordion</h2>
      <Accordion />
      <h2>Modal</h2>
      <Modal />
    </div>
  );
};
