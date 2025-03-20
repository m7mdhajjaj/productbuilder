interface Iprobs extends React.HTMLAttributes<HTMLSpanElement> {
    color: string;
    }

const ColorCircle = ({ color , ...rest}: Iprobs) => {

    return (
        <span className="  block w-5 h-5 rounded-full" style={{ backgroundColor: color }} 
            {...rest}
        />
    );
};
export default ColorCircle;