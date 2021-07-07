import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";
import Form from "./Form";

const App: React.FC = () => {
  const onSubmit = (form: { name: string; desc: string }) => {
    console.log(form);
  };
  return <Form onSubmit={onSubmit} />;
};

export default App;
