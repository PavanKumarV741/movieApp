import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './component/head/Header';
import Home from './component/pages/Home';
import MovieDetail from './component/pages/MovieDetail';

function App() {
  return (
    <div className="App">

        <Router>
          <Header/>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='movie/:id' element={<MovieDetail/>}></Route>
            <Route path='/*' element={<h1>Error message</h1>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
