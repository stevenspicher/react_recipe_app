import Navbar from './components/Navbar';
import Home from './components/Home';
import info from './components/data.jsx';


const App = () => {
  return (
    <div className="App">
      <Navbar title="Broccoli Beef" image={info[0].link}/>
      <div className="content">
        <Home info={info} />
      </div>
        </div>
  );
}

export default App;