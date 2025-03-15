import { InputHTMLAttributes } from "react";

interface Iprobs extends InputHTMLAttributes<HTMLInputElement> {
    
       
    
}

const Input = ({ ...rest}: Iprobs) => {
  return (
    <input 
      className="w-full text-white rounded-md p-2 cursor-pointer"{...rest}
    />
  );
};
export default Input;