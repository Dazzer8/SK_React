import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/home"
import Products from "./pages/Product"
import ErrorPage from "./pages/Errorpage"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="" element= {<Home />} />
        <Route path="login" element= {<Login />} />
        <Route path="register" element= {<Register />} />
        <Route path="product" element= {<Products />} />
        errorElement = {<ErrorPage />}
        <Route path="dashboard/*" element={<Dashboard />} />


        {/* 404 path always keep at last */}
          <Route path="*" element={<NotFound />} />        

      </Routes>
    </BrowserRouter>
  )
}

export default App
