import './App.css';
import CalculatorContainer from './componets/CalculatorContainer';
import Display from './componets/Display';
import IncrementBtn from './componets/IncrementButton';
import Title from './componets/Title';


function App() {
  return (
    <div className="App">
     
    <Title />

    <CalculatorContainer />

    <Display />

    <IncrementBtn />
    </div>
  );
}

export default App;
