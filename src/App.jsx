
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Parent from "./navbar Component/Parent.jsx"

function App(){

  return <BrowserRouter>
  <Routes>
    <Route path="/home" element = {<Parent/>}/>
  </Routes>
  <div>hi there</div>

  </BrowserRouter>

}

export default App
