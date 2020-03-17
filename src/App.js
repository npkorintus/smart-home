import React from 'react';

import Device from './components/device';
import Room from './components/room';
import Thermostat from './components/thermostat';

function App() {
  return (
    <div className='app'>
      <div className='flex-layout'>
        <div className='block'>
          <h2>Lighting</h2>
          <Room name='Living Room' />
          <Room name='kitchen' />
          <Room name='bedroom' />
          <Room name='study' />
        </div>
        <div className='block'>
          <h2>Climate Control</h2>
          <Thermostat />
        </div>
        <div className='block'>
          <h2>Devices</h2>
          <Device name='Wi-fi network' />
          <Device name='television' />
          <Device name='home security system' />
        </div>
      </div>
    </div>
  );
}

export default App;
