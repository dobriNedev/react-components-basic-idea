
const Display = ({ value }) => {
    return (
        <div className="display" mode="single" max={70}>
            Value:{value}
        </div>
    );
};

export default Display;