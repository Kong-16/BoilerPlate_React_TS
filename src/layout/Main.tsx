import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div>
      <div className="main-page min-h-screen flex flex-col">
        <Header />
        <div className="content-container flex justify-center flex-grow">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
