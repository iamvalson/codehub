import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/authPages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};
export default App;
