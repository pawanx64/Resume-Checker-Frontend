import { Home } from "./Pages/Home"
import { Routes,Route } from 'react-router-dom';
import { About } from "./Pages/About"
import { Upload } from "./Pages/Upload";
function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/About" element={<About/>}/>
        <Route  path="/Upload" element={<Upload/>}/>

      </Routes>
    </>
  )
}

export default App
