import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/counter";
import Products from "./components/product";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
