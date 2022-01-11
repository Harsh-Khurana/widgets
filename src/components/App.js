import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
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
  return (
    <div style={{ margin: "10px" }}>
      <Translate />
    </div>
  );
};

export default App;
