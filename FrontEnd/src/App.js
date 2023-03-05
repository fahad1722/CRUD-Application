import "./App.css";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUsers";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";
import UserDetails from "./components/UserDetails";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
