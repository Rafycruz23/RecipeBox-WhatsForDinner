
import Navbar from "./Navbar";
import CarouselSlide from "./CarouselSlide";
import "./styles.css" 
import {Link, Route, Routes} from 'react-router-dom';
import AllRecipes from './AllRecipes';
import PlanMeals from './PlanMeals';
import React from 'react';


// export default function App() {
//   return (
//     <div>
      
//         <Route path="/navbar" component={Navbar} />
      
//       {/* <Navbar />
//     <CarouselSlide /> */}
//       {/* <Route path='/PlanMeals' component={PlanMeals} /> */}
//     </div>
//   );
// };

export default function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CarouselSlide/>}/>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/plan" element={<PlanMeals />} />
        <Route path="/all" element={<AllRecipes />} />
      </Routes>
    </div>
  );
}



