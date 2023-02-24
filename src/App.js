import './App.css';
import CalculatorContainer from './componets/CalculatorContainer';
import DecrementBtn from './componets/DecrementButton';
import Display from './componets/Display';
import IncrementBtn from './componets/IncrementButton';
import Title from './componets/Title';


function App() {
  return (
    <div className="App">
     
    <Title />

    <CalculatorContainer />
    <br></br>
    <Display />

    <IncrementBtn />
    <DecrementBtn />
    </div>
  );
}

export default App;
