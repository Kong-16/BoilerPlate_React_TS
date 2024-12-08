import React from 'react';
import { HashLoader } from 'react-spinners';
import LogoComponentSample from '../assets/LogoComponentSample';

function Home() {
  return (
    <div>
      <LogoComponentSample size={100} fill="skyblue" className='fill-black'/>
      <HashLoader color="#3b82f6" />
    </div>
  );
}

export default Home;
