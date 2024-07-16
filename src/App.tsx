import React from "react";
import FetchApi from "./components/FetchApi";
import Formhandle from "./components/Formhandle";

const App: React.FC = () => {
  return (
    <div>
      <FetchApi />
      <Formhandle />
    </div>
  );
};

export default App;
