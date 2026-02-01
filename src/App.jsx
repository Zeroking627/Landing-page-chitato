import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import BestSeller from './components/BestSeller.jsx'
import { useRef, useState } from 'react'


function App() {
  const [Open, setOpen] = useState(false);

 return (
  <div>
    <Navbar />
    <Hero Open={Open} setOpen={setOpen} />
    <BestSeller Open={Open} />
  </div>
 )
}

export default App;
