import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Error404 from "./components/Error404";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/components/HomePage" element={<HomePage />}></Route>
        <Route path="/components/LoginPage" element={<LoginPage />}></Route>
        <Route path="/components/Error404" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
