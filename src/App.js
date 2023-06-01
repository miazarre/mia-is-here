import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Error from './components/Error';
import Home from './components/Home/';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen m-2">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
