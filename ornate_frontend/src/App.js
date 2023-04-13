import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={user ? <Home /> : <Form />} />
        <Route path="/upload" element={user ? <Upload /> : <Form />} />
        <Route path="/profile" element={user ? <Profile /> : <Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
