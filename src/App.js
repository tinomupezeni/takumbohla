import { Routes, Route} from 'react-router-dom'
import Home from "./routes/Home";
import Contact from './routes/Contact';
import Ingredients from './routes/Ingredients';

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/ingredients' element={<Ingredients/>} />
      </Routes>
    </div>
  )
}

export default App