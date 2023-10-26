import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './app/Blogs';
import Features from './app/Features';
import Help from './app/Help';
import Layout from './app/Layout';
import Pricing from './app/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="blogs" element={<Blog />} />
          <Route path="features" element={<Features />} />
          <Route path="help" element={<Help />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
