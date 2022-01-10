import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
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

const App = () => {
  return (
    <div style={{ margin: "10px" }}>
      <Search />
    </div>
  );
};

export default App;
