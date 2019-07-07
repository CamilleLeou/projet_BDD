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

  showUsers() {
    console.log(this.state.users);
  }

  setUsers = () => {
    let url = "http://localhost:3050/users";
    fetch(url).then(response => response.json()).then(data => {
      this.setState(() => {
        return { users: data };
      });
    });
  };

  setCampaigns = () => {
    let url = "http://localhost:3050/campaigns";
    fetch(url).then(response => response.json()).then(data => {
      this.setState(() => {
        return { campaigns: data };
      });
    });
  };

  setProspectsLists = () => {
    let url = "http://localhost:3050/prospectslists";
    fetch(url).then(response => response.json()).then(data => {
      this.setState(() => {
        return { prospect_list: data };
      });
    });
  };

  setProspects = () => {
    let url = "http://localhost:3050/prospects";
    fetch(url).then(response => response.json()).then(data => {
      this.setState(() => {
        return { prospects: data };
      });
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          // A.K.A ...state
          state: this.state,
          setUsers: this.setUsers,
          showUsers: this.showUsers
        }}
      >
        {this.props.children};
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
