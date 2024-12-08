import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Board from './pages/Board';
import News from './pages/News';
import Auth from './layout/Auth';
import SignIn from './pages/SignIn';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/board" element={<Board />} />
          <Route path="/stock" element={<Stock />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
