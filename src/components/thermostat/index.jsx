import * as React from 'react';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Thermostat extends React.Component {
  state = {
    temperature: 72,
    systemOff: true,
    heatOn: false,
    coolOn: false,
    fanOn: false,
    fanOff: false,
    fanAuto: true,
  }

  increaseTemp = () => {
    this.setState({
      temperature: this.state.temperature + 1
    });
  };

  decreaseTemp = () => {
    this.setState({
      temperature: this.state.temperature - 1
    });
  };

  resetTemp = () => {
    this.setState({
      temperature: 72
    });
  };

  toggleSystem = () => {
    this.state.heatOn && this.setState({heatOn: false, coolOn: true, systemOff: false})
    this.state.coolOn && this.setState({heatOn: false, coolOn: false, systemOff: true})
    this.state.systemOff && this.setState({heatOn: true, coolOn: false, systemOff: false})
  };

  toggleFan = () => {
    this.state.fanOn && this.setState({fanOn: false, fanOff: true, fanAuto: false})
    this.state.fanOff && this.setState({fanOn: false, fanOff: false, fanAuto: true})
    this.state.fanAuto && this.setState({fanOn: true, fanOff: false, fanAuto: false})
  };

  render() {

    const system = this.state.systemOff ? 'Off' : this.state.coolOn ? 'Cool'  : 'Heat';
    const fan = this.state.fanOn ? 'On' : this.state.fanOff ? 'Off' : 'Auto';

    return(
      <div className='thermostat'>
        <h1 className='current-temp'>{this.state.temperature}&#176;</h1>
        <div className='flex-layout'>
          <button className='climate-btn' onClick={this.decreaseTemp}><FontAwesomeIcon icon={faMinus}/></button>
          <button className='climate-btn' onClick={this.resetTemp}>Reset</button>
          <button className='climate-btn' onClick={this.increaseTemp}><FontAwesomeIcon icon={faPlus}/></button>
        </div>
        <div className='flex-layout'>
          <div className='climate-mode'>
            <p className='climate-details'>{system}</p>
            <button className='climate-btn' onClick={this.toggleSystem}>Set Mode</button>
          </div>
          <div className='fan-mode'>
            <p className='climate-details'>{fan}</p>
            <button className='climate-btn' onClick={this.toggleFan}>Set Fan</button>
          </div>
        </div>
      </div>
    );
  }
}