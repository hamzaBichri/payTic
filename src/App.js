import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header'
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';

function App() {
  return (
    <div className="App">
      


      <BrowserRouter>
      <Header/>

        <Routes>
      
          <Route  path="/" element={<Home />} />
          <Route   path="/Login" element={<Login />} />
          <Route   path="/Posts" element={<Posts />} />
              
        </Routes>
        </BrowserRouter>



    </div>
  );
}

export default App;
