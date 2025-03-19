interface Iprobs {
    color: string;
    }

const ColorCircle = ({ color }: Iprobs) => {

    return (
        <span className="  block w-5 h-5 rounded-full" style={{ backgroundColor: color }} />
    );
};
export default ColorCircle;