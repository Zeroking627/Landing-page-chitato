import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import BestSeller from './components/BestSeller.jsx'
import { useRef } from 'react'


function App() {
  const bestSellerRef = useRef(null);

 return (
  <div>
    <Navbar />
    <Hero bestSellerRef={bestSellerRef} />
    <BestSeller bestSellerRef={bestSellerRef} />
  </div>
 )
}

export default App
