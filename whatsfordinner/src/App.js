
import Navbar from "./Navbar";
import CarouselSlide from "./CarouselSlide";
import "./styles.css" 
import {Route, Routes} from 'react-router-dom';
import AllRecipes from './AllRecipes';
import PlanMeals from './PlanMeals';


export default function App() {
  return <div>
    <Navbar />
    <CarouselSlide />
    <Route path='/PlanMeals' component={PlanMeals} />
  </div>
};




// export default App;
