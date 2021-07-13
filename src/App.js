import { Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Home from "./components/Home"
import Movies from "./components/Movies"
import Shows from './components/Shows'
import AddNew from "./components/AddNew"
import Details from "./components/Details"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/shows">
        <Shows />
      </Route>
      <Route path="/add-new">
        <AddNew />
      </Route>
      <Route path="/:id">
        <Details />
      </Route>
      <Footer />

    </div>
  );
}

export default App;
