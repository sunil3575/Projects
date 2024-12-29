
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
import Slider from './Components/Slider';
import Layout from './Pages/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Experience from './Pages/Experience';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Motion from './Pages/Motion';

function App() {
  return (
    <>
    {/* <Motion/> */}
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/experience' element={<Experience/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='*' element={<ErrorPage/>}/>
  </Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
