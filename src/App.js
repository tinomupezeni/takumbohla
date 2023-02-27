import {  Route, HashRouter} from 'react-router-dom'
import Home from "./routes/Home";
import Contact from './routes/Contact';
import Ingredients from './routes/Ingredients';

function App(){
  return(
    <div className="App">
      <HashRouter>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/ingredients' element={<Ingredients/>} />
      </HashRouter>
    </div>
  )
}

export default App