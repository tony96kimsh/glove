import './App.css'
import About from './component/About';
import Header from './component/Header';
import Intro from './component/intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './component/Project';
import Contact from './component/Contact';
import Experience from './component/Experience';
import Story from './component/Story';

function App() {

  return (
    <>
      <Header />
      <Intro />
      <About />
      <Story />
      <Project />
      <Experience />

      <Contact />
      <br />
    </>
  )
}

export default App