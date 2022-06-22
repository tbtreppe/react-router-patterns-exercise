import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

function App({ colors }) {
  return (
    <div>
      <BrowserRouter>
        <Routes colors={colors} />
      </BrowserRouter>
    </div>
  );
}

export default App;
