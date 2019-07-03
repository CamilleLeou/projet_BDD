import React, { Component } from "react";
import Query from "./Scripts/query";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    users: [],
    campaigns: [],
    prospect_list: [],
    prospects: []
  };

  componentDidMount(){
      this.setUsers();
  }

  setUsers = () => {
    let tempUsers = Query.queryDatabasePromise(
      "select * from dba_prj01.Prospect"
    );

    this.setState(() => {
        return {users:tempUsers};
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children};
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };