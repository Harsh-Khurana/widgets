import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Exercise from "./Exercise";

const items = [
  {
    title: "What is React?",
    content: "A JavaScript library for building user interfaces",
  },
  {
    title: "Why use React?",
    content: "React makes it painless to create interactive UIs",
  },
  {
    title: "How do you use React?",
    content:
      "Build encapsulated components that manage their own state, then compose them to make complex UIs",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  const output = (
    <p style={{ color: selected.value }}>The text color is {selected.value}</p>
  );

  return (
    <div style={{ margin: "10px" }}>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          setSelected={setSelected}
          output={output}
        />
      ) : null}
    </div>
  );
};

export default App;
