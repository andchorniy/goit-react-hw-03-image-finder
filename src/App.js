import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";

class App extends Component {
  state = {
    query: "",
  };
  handlerSubmit = (query) => {
    this.setState({ query });
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handlerSubmit} />
      </div>
    );
  }
}

export default App;
