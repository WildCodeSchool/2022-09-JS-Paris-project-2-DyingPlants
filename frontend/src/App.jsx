import ECommerce from "@pages/ECommerce/ECommerce";
import Startup from "@pages/Startup/Startup";
import Home from "@pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-commerce" element={<ECommerce />} />
        <Route path="/startup" element={<Startup />} />
        {/* <Route path="restaurant" element={<Restaurant />} />
         */}
      </Routes>
    </div>
  );
}

export default App;
