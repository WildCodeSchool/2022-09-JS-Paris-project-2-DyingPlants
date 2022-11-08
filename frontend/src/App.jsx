import { Route, Routes } from "react-router-dom";
import ECommerce from "./pages/ECommerce/ECommerce";
import Restaurant from "./pages/Restaurant/Restaurant";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-commerce" element={<ECommerce />} />
        <Route path="/restaurant" element={<Restaurant />} />
        {/* <Route path="startup" element={<Startup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
