import Home from './components/Home'
import CenterBlock from './components/CenterBlock';
import WestBlock from './components/WestBlock';
import EastBlock from './components/EastBlock';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route path='/center' Component={CenterBlock}/>
      <Route path='/west' Component={WestBlock}/>
      <Route path='/east' Component={EastBlock}/>
      <Route path='/nav' Component={Navbar}/>
    </Routes>
  );
}

export default App;
