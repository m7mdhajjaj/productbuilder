interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
       message? <div className="text-red-500 text-xs font-semibold my">{message}</div>:null
    );
    };
    export default ErrorMessage;