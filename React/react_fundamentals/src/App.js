import './App.css';
import Header from './components/Header'
import Intro from './components/challenges/day01/Intro'
import Home from './components/challenges/day01/Home'
import Footer from './components/challenges/day01/Footer'

function App() { //this is a root component
  const name = 'Alec' //JS abpve return statement can be injected into JSX using { }

  return (
    <div className="App">
      <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App component</h2>
      <Header /> { /* this is how you mount a component */}
      <Intro />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
