import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/home"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="home" element= {<Home />} />
        <Route path="login" element= {<Login />} />
        <Route path="register" element= {<Register />} />
        
        


      </Routes>
    </BrowserRouter>
  )
}

export default App
