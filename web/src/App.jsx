// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import First from './component/First'
// import Second from './component/Second'
// import Third from './component/Third'
// import Fourth from './component/Fourth'
// import Fifth from './component/Fifth'
// import Sixth from './component/Sixth'
// import Seventh from './component/Seventh'
// import Eight from './component/Eight'
// import Ninth from './component/Ninth'
// import Tenth from './component/Tenth'
// import CourseSectionS from './component/CourseSectionS'
import Homepage from './component/Homepage'
import CourseF from './component/CourseF'
import Categories from './component/Categories'
import Instructors from './component/Instructors'
import Pricing from './component/Pricing'
import About from './component/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    {/* <First/>
    <Second/>
    <Third/>
    <Fifth/>
    <Sixth/>
    <Seventh/>
    <Eight/>
    <Ninth/>
    <Tenth/> */}
    <Routes>
      
      {/* <Route path='/'element={<First/>}/>
      <Route path='/a'element={<Second/>}/>
      <Route path='/b'element={<Third/>}/>
      <Route path='/c'element={<Fourth/>}/>
      <Route path='/d'element={<Fifth/>}/>
      <Route path='/e'element={<Sixth/>}/>
      <Route path='/f'element={<Seventh/>}/>
      <Route path='/g'element={<Eight/>}/>
      <Route path='/h'element={<Ninth/>}/>
      <Route path='/ih'element={<Tenth/>}/> */}
      <Route path='/'element={<Homepage/>}/>

      <Route path='/course'element={<CourseF/>}/>
      <Route path='/categories'element={<Categories/>}/>
      <Route path='/instructors'element={<Instructors/>}/>
      <Route path='/price'element={<Pricing/>}/>
      <Route path='/about'element={<About/>}/>
    </Routes>
          </>
  )
}

export default App
