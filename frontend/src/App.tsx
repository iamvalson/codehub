import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/authPages/LoginPage";
import SignupPage from "./pages/authPages/SignupPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};
export default App;
