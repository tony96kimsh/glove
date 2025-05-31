import './App.css'
import About from './component/About';
import Header from './component/Header';
import Intro from './component/intro'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header />
      <Intro />
      <About />

      <div className='bg-secondary'>project</div>
      <div className='bg-secondary'>contact</div>
      <div className='bg-secondary'>footer</div>
      <br />
    </>
  )
}

export default App
