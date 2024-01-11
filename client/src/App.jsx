import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
