import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route path="/PlanMeals" component={PlanMeals} />
    </div>
  );
}

export default App;
