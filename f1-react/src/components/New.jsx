import React from 'react';

class New extends React.Component {
  addDriver = async () => {
    const body = {
      driver: {
        name: "Daniel Ricciardo",
        team: "Renault",
        profile: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.grandprix.com.au%2Ffan-zone%2Fformula-1%2Fdrivers%2Fdaniel-ricciardo&psig=AOvVaw3ePjo3gXsjO6odurzmm1yF&ust=1592974918131000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiOq5aUl-oCFQAAAAAdAAAAABAD"
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
