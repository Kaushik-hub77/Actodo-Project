
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/signup.jsx";
import Landing from "./Pages/landing.jsx";
import { useState } from "react";


function App(){

  const[users,setusers]= useState([
    {
        username:"kaushik",
        password:"123@35"
    },
    {
        username:"Micheal",
        password:"789"
    }
])

return(
  <BrowserRouter>
  <Routes>
    <Route path="/"  element={<Login users={users} setusers={setusers}></Login>}></Route>
    <Route path="/Signup" element={<Signup users={users} setusers={setusers}></Signup>}></Route>
    <Route path="/Landing"  element={<Landing></Landing>}></Route>
  </Routes>
  </BrowserRouter>
)

}


export default App
