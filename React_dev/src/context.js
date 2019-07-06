import React, { Component } from "react";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    users: [],
    campaigns: [],
    prospect_list: [],
    prospects: []
  };

  componentDidMount() {
    this.setUsers();
    this.setCampaigns();
    this.setProspects();
    this.setProspectsLists();
  }

  refreshData()
  {
    this.setUsers();
    this.setCampaigns();
    this.setProspects();
    this.setProspectsLists();
  }

  setUsers = () => {
    let url = "http://localhost:3050/users";
    fetch(url).then(response => response.json()).then(data => {
      console.log(data);
    });
    this.setState(data => {
      return { users: data };
    });
  };

  setCampaigns = () => {
    let url = "http://localhost:3050/campaigns";
    fetch(url).then(response => response.json()).then(data => {
      console.log(data);
    });
    this.setState(data => {
      return { campaigns: data };
    });
  };

  setProspectsLists = () => {
    let url = "http://localhost:3050/prospectslists";
    fetch(url).then(response => response.json()).then(data => {
      console.log(data);
    });
    this.setState(data => {
      return { prospect_list: data };
    });
  };

  setProspects = () => {
    let url = "http://localhost:3050/prospects";
    fetch(url).then(response => response.json()).then(data => {
      console.log(data);
    });
    this.setState(data => {
      return { prospects: data };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children};
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
