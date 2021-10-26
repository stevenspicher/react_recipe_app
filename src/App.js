import Navbar from './components/Navbar';
import Home from './components/Home';


const App = () => {
  return (
    <div className="App">
      <Navbar title="Broccoli Beef"/>
      <div className="content">
        <Home />
      </div>
        </div>
  );
}

export default App;