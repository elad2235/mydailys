import './App.css';
import CardContainer from './components/CardContainer'
import { AppBar, Toolbar } from "@material-ui/core"

function App() {



  
  return (
    <div className="App">
          <AppBar position="static">
      <Toolbar>My Daily's</Toolbar>
    </AppBar>
    <main>
      <div className="cards-container">
        <div className="cards-flex">
          <div className="card">
          <CardContainer name="Daily's"/>
          </div>
          <div className="card" >
          <CardContainer name="Weekly's"/>
          </div>
          <div className="card" >
          <CardContainer name="Yearly's"/>
          </div>

        </div>
      </div>
    </main>
    </div>
  );
}

export default App;
