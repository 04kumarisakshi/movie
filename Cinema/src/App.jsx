import Login from "./Pages/Login"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App