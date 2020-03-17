import * as React from 'react';

import Switch from '../switch';

export default class Device extends React.Component {

  render() {

    return (
      <div className='device'>
        <div className='flex-layout space-between'>
          <h4 className='device-name'>{this.props.name}</h4>
          <Switch />
        </div>
      </div>
    );
  }
}