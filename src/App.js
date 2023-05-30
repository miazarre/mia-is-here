import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
//import Footer from './components/Footer';
//import Error from './components/Error';
//import Home from './components/Home';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen">
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
  </Routes> */}
      </main>
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default App;
