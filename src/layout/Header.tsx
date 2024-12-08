import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/layout.css';
import UserSVG from '../assets/user.svg?react';
import SvelteSVG from '../assets/svelte.svg?react';

const Header = () => {
  const navigate = useNavigate();

  const LeftSection = () => (
    <div className="left-container h-full">
      <LogoSection />
    </div>
  );

  const LogoSection = () => (
    <div className="icon-container h-full">
      <SvelteSVG
        className="icon cursor-pointer"
        onClick={() => navigate('/')}
      />
    </div>
  );

  const CenterSection = () => (
    <div className="center-container flex justify-center flex-grow">
      <ActiveLink path="/about" name="About" />
      <ActiveLink path="/news" name="News" />
      <ActiveLink path="/board?page=1" name="Board" />
      <ActiveLink path="/stock" name="Stock" />
    </div>
  );

  const ActiveLink = ({ path, name }: { path: string; name: string }) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? 'link-highlight' : 'link-normal'
      }
    >
      {name}
    </NavLink>
  );

  const RightSection = () => (
    <div className="right-container h-full">
      <UserSVG
        className="icon cursor-pointer"
        onClick={() => navigate('/auth')}
      />
    </div>
  );

  return (
    <div className="header-nav nav h-16">
      <LeftSection />
      <CenterSection />
      <RightSection />
    </div>
  );
};

export default Header;
