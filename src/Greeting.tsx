import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
};

function Greeting({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
}
Greeting.defaultProps = {
  mark: "!",
};

export default Greeting;
