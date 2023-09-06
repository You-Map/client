import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Imported Pages
import Intro from './pages/Intro/Intro';
import Map from './pages/Map/Map';
import Place from './pages/Place/Place';
import Purpose from './pages/Purpose/Purpose';
import Social from './pages/Social/Social';
import Nav from './components/Nav';
import SignupBox from './pages/Intro/SignupBox';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/register" element={<SignupBox />} />
        <Route path="/map" element={<Map />} />
        <Route path="/place" element={<Place />} />
        {/* <Route path="/placeall" element={<PlaceAll />} />
        <Route path="/placerest" element={<PlaceRest />} />
        <Route path="/placestudy" element={<PlaceStudy />} />
        <Route path="/placeteam" element={<PlaceTeam />} />
        <Route path="/placepath" element={<PlacePath />} /> */}
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
