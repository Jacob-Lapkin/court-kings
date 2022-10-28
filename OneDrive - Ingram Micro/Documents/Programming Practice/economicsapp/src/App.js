import './App.css';
import Navbar from './navbar/Navbar';
import Jumbotron from './jumbotron/Jumbotron';

function App() {
  function getData(term) {
    console.log(term)
  }
  return (
    <>
    <Navbar/>
    <Jumbotron onChange={getData}/>
    </>
  );
}

export default App;
