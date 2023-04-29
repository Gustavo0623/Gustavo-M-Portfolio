import { React , useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navigation from './Navigation';
import Error404 from './Error404';
import About from './places/About';
import Contact from './places/Contact';
import Projects from './places/Projects';
import Resume from './places/Resume';


function App() {

  // to set scroll background behavior
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const backgrounds = document.querySelector('main');
        const speed = backgrounds.getAttribute('data-speed');
        const xPos = -(window.pageYOffset / speed);
        backgrounds.style.backgroundPosition = `${xPos}px 0`;
    })
  }, [])


  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={ <Home/> }></Route>
        <Route exact path='/about' element={ <About/> }></Route>
        <Route exact path='/contact' element={ <Contact/> }></Route>
        <Route exact path='/projects' element={ <Projects/> }></Route>
        <Route exact path='/resume' element={ <Resume/> }></Route>
        <Route path='/*' element={ <Error404/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
