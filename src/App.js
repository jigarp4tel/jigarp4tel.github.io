import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Hero from './components/sections/Hero';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <main>
              <Hero />
            </main>
          </Route>
        </Switch>
      </Router>


    </div >
  );
}

export default App;
