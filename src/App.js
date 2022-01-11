import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import Exercise from "./components/Exercise";

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

export default () => {
  const [selected, setSelected] = useState(options[0]);

  const dropdownOutput = (
    <p style={{ color: selected.value }}>
      The text is {selected.value} in color
    </p>
  );

  return (
    <div style={{ margin: "10px" }}>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          setSelected={setSelected}
          output={dropdownOutput}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
