import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <Banner />
      <div className="main container-fluid">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
