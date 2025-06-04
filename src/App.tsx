import './App.css'
import About from './component/About';
import Header from './component/Header';
import Intro from './component/intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {

  return (
    <>
      <Header />
      <Intro />
      <About />

      <Project />
      <Contact />
      <br />
    </>
  )
}

export default App
