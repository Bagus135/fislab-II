import NoRoutes from './URLpath/noRoute';
import Home from './URLpath/home';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import W5 from './fislab/W5/renderW5';
import MP2 from './fislab/MP2/renderMP2';
import MP5 from './fislab/MP5/renderMP5';
import W1 from './fislab/W1/renderW1';
import W2 from './fislab/W2/renderW2';
import W3 from './fislab/W3/renderW3';
import { MathJaxContext } from 'better-react-mathjax';


function App() {
  return (
    <MathJaxContext>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wave-1' element={<W1/>}/>
        <Route path='/wave-2' element={<W2/>}/>
        <Route path='/wave-3' element={<W3/>}/>
        <Route path='/wave-5' element={<W5/>}/>
        <Route path='/modern-physics-2' element={<MP2/>}/>
        <Route path='/modern-physics-5' element={<MP5/>}/>
        <Route path='*' element={<NoRoutes/>}/>
      </Routes>
      </BrowserRouter>
    </MathJaxContext>
  );
}

export default App;
