import React from "react";
import NebulaBackground from "./components/NebulaBackground";

function App() {
  return (
    <div className="relative min-h-screen">
      <NebulaBackground />

      <div className="relative z-10 text-white p-8">
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
