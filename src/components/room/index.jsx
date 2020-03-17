import * as React from 'react';

import Switch from '../switch';

export default class Room extends React.Component {

  render() {

    return (
      <div className='room'>
        <div className='flex-layout space-between'>
          <h4 className='room-name'>{this.props.name}</h4>
          <Switch />
        </div>
      </div>
    );
  }
}