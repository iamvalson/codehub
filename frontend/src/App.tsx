import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import LoginPage from "./pages/authPages/LoginPage";
import SignupPage from "./pages/authPages/SignupPage";
import Codespace from "./pages/Codespace";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/codespace" element={<Codespace />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
