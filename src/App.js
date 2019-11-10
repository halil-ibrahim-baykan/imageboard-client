import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
// import List from "./components/List";
import ListContainer from "./components/ListContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
