
import Navbar from "./Navbar";
import Home from "./Home";
import "./styles.css" 
import {Route, Routes} from 'react-router-dom';
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
    //having the Navbar component only rendered in the App component will display it on each page that is listed in the Routes. The Route paths need to be wrapped in a Routes tag. The paths need to match the 'to' prop in the Link tags on the Navbar componet. The Routes allow for client-side rendering, meaning that the whole page isn't refreshed with each link click, rather just the component that is specified in the element prop is rendered.
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<PlanMeals />} />
        <Route path="/all" element={<AllRecipes />} />
      </Routes>
    </div>
  );
}



