import React, { lazy, Component, Suspense } from "react";
import axios from "axios";
import Loading from "./components/Loading";

const Persons = lazy(() => import("./components/Persons"));
class App extends Component {
  state = { persons: [] };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Persons persons={this.state.persons} />
        </Suspense>
      </div>
    );
  }
}

export default App;
