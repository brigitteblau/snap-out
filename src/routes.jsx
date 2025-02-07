import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Privacy from './components/pages/Privacy';
import Help from './components/pages/Help';
import Contributions from './components/pages/Contributions';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/help" element={<Help />} />
      <Route path="/contributors" element={<Contributions />} />
    </Routes>
  );
}

export default AppRoutes;
