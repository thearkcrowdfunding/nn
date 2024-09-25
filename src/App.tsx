import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PaymentSuccess from "@/pages/PaymentSuccess";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<PaymentSuccess />} />
          {/* Add more routes here as you create more pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
