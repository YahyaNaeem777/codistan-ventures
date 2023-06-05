import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./screens/Cart/Cart";
import HomeScreen from "./screens/Home/HomeScreen";
import {Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div style={{background:"skyblue"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
