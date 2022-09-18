
import './App.css';
import Nav from './component/nav/Nav';
import Home from './page/Home/Home';
import Page1 from './page/page1.js/page1';
import Page2 from './page/page2/page2';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <Router>
        <Nav/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="page1/" element={<Page1 />}></Route>
              <Route path="page2/" element={<Page2 />}></Route>
            </Routes>
          
        </Router>

     
    </div>
  );
}

export default App;
