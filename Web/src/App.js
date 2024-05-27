import React from 'react'
import Ourwork from './Nexa/Ourwork'
import About from './Nexa/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Consultancy from './Nexa/Consultancy'



const App = () => {
  return (
    <div>


    <Router>
     
   <Routes>
    
   
    <Route path='/Ourwork'element={<Ourwork/>}></Route>
      <Route path='/About' element={<About/>}></Route> 
      <Route path='/Consultancy' element={<Consultancy/>}></Route>
   
   </Routes>
   </Router>
   
      
     
     
    
        
       
      
    </div>
  )
}

export default App