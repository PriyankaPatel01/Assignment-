import Landing from "./components/Landing";
import Form from "./components/Form";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/form" element={<Form/>} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App
