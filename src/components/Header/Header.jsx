import React from 'react';
import { Link } from 'react-router-dom';
import chevronLeft from '../../assets/chevron-left.png';
import settings from '../../assets/settings.png';
import mic from '../../assets/microphone.png';

const Header = () => (
  <nav style={{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    backgroundColor: '#ce3f75',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    top: '0',
  }}
  >
    <div style={{ width: '20px', height: '20px', paddingLeft: '30px' }}>
      <Link to="/" style={{ display: 'block', width: '20px', height: '20px' }}>
        <img src={chevronLeft} alt="arrow" width={20} height={20} />
      </Link>
    </div>
    <div>
      <h1 style={{ color: '#fff', fontSize: '1.2rem' }}>Dota Hero Stats</h1>
    </div>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      paddingRight: '30px',
    }}
    >
      <img src={mic} alt="mic" width={20} height={20} />
      <img src={settings} alt="settings" width={20} height={20} />
    </div>
  </nav>
);

export default Header;
