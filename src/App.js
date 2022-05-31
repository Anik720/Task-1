import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import BannerTop from './Pages/Home/BannerTop/BannerTop';
import { Route, Routes } from 'react-router-dom';
import Versatile from './Pages/Home/Versatile/Versatile';
import PopUnder from './Pages/Home/PopUnder/PopUnder';
import Skim from './Pages/Home/Skim/Skim';
import Native from './Pages/Home/Native/Native';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Home></Home>
      <Routes>
        <Route path='ad'>
          <Route path='versatile' element={<PopUnder></PopUnder>} index></Route>
          <Route path='banner' element={<BannerTop></BannerTop>}></Route>
          <Route path='native' element={<Native></Native>}></Route>
          <Route path='skim' element={<Skim></Skim>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
