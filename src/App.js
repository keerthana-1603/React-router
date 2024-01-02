
import './App.css';
import Fsd from './Components/Fsd';
import Datasci from './Components/Datasci';
import Cyber from './Components/Cyber';
import Carees from './Components/Carees';
import { Header } from './Components/Header';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element={<Carees/>}/>
      <Route path="Full-stack-developer" element={<Fsd/>}/>
      <Route path="/data-science" element={<Datasci/>}/>
      <Route path="/cyber-security" element={<Cyber/>}/>
   </Routes>

    </div>
  );
}

export default App;
