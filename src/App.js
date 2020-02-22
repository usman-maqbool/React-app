import React from 'react';
import {BrowserRouter ,Route , Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Post from './components/Post';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/:test" component={Post} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
