import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ECommerce from "./pages/ECommerce/ECommerce";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-commerce" element={<ECommerce />} />
          <Route path="/restaurant" element={<Restaurant />} />
          {/* <Route path="startup" element={<Startup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
