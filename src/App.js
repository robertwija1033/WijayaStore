import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Landing from "./components/Landing/Landing";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import Cart from "./components/Cart/Cart";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/Payment" element={<Payment />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Detail/:name" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
