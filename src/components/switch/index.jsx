import * as React from 'react';

import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Switch extends React.Component {

  state = {
    isOn: false
  }

  toggleSwitch = () => {
    this.setState({
      isOn: !this.state.isOn
    });
  };

  render() {

    const deviceSwitch = this.state.isOn ? 'switchOn' : 'switchOff';

    return(
      <div className='switch'>
        <button className={`rounded-btn ${deviceSwitch}`} onClick={this.toggleSwitch}><FontAwesomeIcon icon={faPowerOff} /></button>
      </div>
    );
  }
}