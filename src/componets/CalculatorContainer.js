import Display from "./Display";
import IncrementBtn from "./IncrementButton";

const CalculatorContainer = () => {
    return(
        <div className="calculator-container">
            <Display />
            <IncrementBtn />
        </div>
    );
};

export default CalculatorContainer;