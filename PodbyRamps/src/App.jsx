import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}
