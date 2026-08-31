
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/books" render={() => <Books books={books} />}/>
      <Nav />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
