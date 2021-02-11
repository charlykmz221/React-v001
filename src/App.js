import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/Menu'
import Routes from './components/Routes'
import HelloWorld from './components/Hello'

function App() {
  return (
    <div className="App">
      <header >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <MenuComponent />
      </header>
        <Routes/>
        {/*<HelloWorld number={"404 forever"}>Bob</HelloWorld>*/}

    </div>
  );
}

export default App;
