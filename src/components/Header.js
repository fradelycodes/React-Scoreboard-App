import React from "react";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = () => {
  return (
    <header>
      <Stats />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </header>
  );
};

Header.defaultProps = {
  title: "Scoreboard",
};
export default Header;
