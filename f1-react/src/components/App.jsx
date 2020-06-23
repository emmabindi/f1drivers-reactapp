import React from 'react';
import New from './New'

class App extends React.Component {
  async componentDidMount() {
    await this.getDrivers();
  }

  getDrivers = async () => {
    const response = await fetch("http://localhost:3000");
    const drivers = await response.json();
    this.setState({ drivers: drivers});
  };

  render() {
    const drivers = this.state?.drivers;
    return (
      <div>
        {drivers &&
        drivers.map((driver, index) => {
          return (
            <div key={index}>
              <img src={driver.profile} alt="Driver pic"/>
              <h3>{driver.name}</h3>
              <h5>Races for: {driver.team}</h5>
              <hr/>
            </div>
          );
        })}
        <New getDrivers={this.getDrivers}/>
      </div>
    );
  }
}

export default App;
