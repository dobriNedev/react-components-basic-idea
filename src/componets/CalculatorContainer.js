import DecrementBtn from "./DecrementButton";
import Display from "./Display";
import IncrementBtn from "./IncrementButton";
import NumberBtn from "./NumberButton";

const CalculatorContainer = () => {
    return(
        <div className="calculator-container">
            <Display />
            <IncrementBtn />
            <DecrementBtn />
            <NumberBtn value={0}/>
            <NumberBtn value={1}/>
            <NumberBtn value={2}/>
            <NumberBtn value={3}/>
            <NumberBtn value={4}/>
            <NumberBtn value={5}/>
            <NumberBtn value={6}/>
            <NumberBtn value={7}/>
            <NumberBtn value={8}/>
            <NumberBtn value={9}/>
        </div>
    );
};

export default CalculatorContainer;