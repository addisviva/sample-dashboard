
import './App.css';
import Navbar from './Components/Common/Navbar'
import TableHolder from './Components/Common/TableHolder'
import Chart from './Components/Common/Body/Chart'
import Banner from './Components/Common/Body/Banner';
import Backnode from './Components/Common/Backnode';

function App() {
  
  return (
    <div className="App">
         <Navbar />
        <Banner /> 
        <Chart />
       <TableHolder />
       <Backnode />
       
       
       
        
    </div>
  );
}

export default App;
