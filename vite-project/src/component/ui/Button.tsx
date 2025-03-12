import { ReactNode } from "react";
interface Iprobs extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classname ?: string;
  width ?: "w-full"|"w-fit";
}

const Button = ({ children,classname,width="w-fit", ...rest }: Iprobs) => {
  return (
    <button
      className={`${classname} ${width} w-full text-white rounded-md p-2 cursor-pointer`} {...rest}>
      {children} 
    </button>
  );
};
export default Button;