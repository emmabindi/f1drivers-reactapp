import React from 'react';

class New extends React.Component {
  addDriver = async () => {
    const body = {
      driver: {
        name: "Daniel Ricciardo",
        team: "Renault",
        profile: "https://www.grandprix.com.au/sites/default/files/styles/driver_or_rider_profile_default/public/driver-rider/image/profile/Daniel-Ricciardo-AusGP-20.jpg"
      }
    }
    try {
      await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      this.props.getDrivers()
    } catch(err) {
      console.log(err.message)
    }
  }

  render() {
    return <button onClick={this.addDriver}>Add Your Favourite Driver</button>
  }
}

export default New;
