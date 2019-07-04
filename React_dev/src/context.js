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
  }

  setUsers = () => {
    // Ici un call api react qui va bien
    // localhost:3000/api/query
    let query = "select * from dba_prj01.Prospect";
    let url = "localhost:3000/api/query?query=" + encodeURIComponent(query);
    console.log(url);
    fetch(url).then(data => {
      console.log(data);
      /*this.setState((data) => {
        return { users: data };
      });
      */
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
