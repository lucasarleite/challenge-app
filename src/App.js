import { BrowserRouter as Router } from "react-router-dom";

import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App container">
        <Banner />
        <div className="main container-fluid">
          <Menu />
          <Content />
        </div>
      </div>
    </Router>
  );
}

export default App;
