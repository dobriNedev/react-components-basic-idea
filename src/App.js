

import './App.css';
import Button from './componets/Button';
import ButtonContainer from './componets/ButtonsContainer';
import CalculatorContainer from './componets/CalculatorContainer';

import Display from './componets/Display';

const App = () => {
  return (
    <CalculatorContainer>
        <Display value="0" />
            <ButtonContainer>
                <Button className=" " value="0" onClick={()=> {console.log("button clicked!");}} />
            </ButtonContainer>
    </CalculatorContainer>
  );
}

export default App;
