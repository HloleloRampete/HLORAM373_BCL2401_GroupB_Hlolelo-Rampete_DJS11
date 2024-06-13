import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUp";

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
