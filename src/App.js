import Header from "./components/Header.js";
import LeftPanel from "./components/LeftPanel.js";
import Grid from "./components/Grid.js";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Grid />
      <LeftPanel />
    </div>
  );
}

export default App;
