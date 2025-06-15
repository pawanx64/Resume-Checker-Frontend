import { Home } from "./Pages/Home"
import { Routes,Route } from 'react-router-dom';
import { About } from "./Pages/About"
import { Upload } from "./Pages/Upload";
import { Feedback } from "./Pages/Feedback";
function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/About" element={<About/>}/>
        <Route  path="/Upload" element={<Upload/>}/>
        <Route  path="/Feedback" element={<Feedback/>}/>
      </Routes>
    </>
  )
}

export default App
