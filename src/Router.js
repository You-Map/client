import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Imported Pages
import Intro from './pages/Intro';
import Map from './pages/Map';
import Place from './pages/Place';
import Purpose from './pages/Purpose';
import Social from './pages/Social';
import Nav from './components/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/map" element={<Map />} />
        <Route path="/place" element={<Place />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
