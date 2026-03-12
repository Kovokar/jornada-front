import { BiSolidError } from "react-icons/bi";

type ErrorMessageProps = {
    message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <div className="container">
            <div className="error-container">
                <BiSolidError className="error-icon" />
                <h2>Oops! Algo deu errado</h2>
                <p className="error-message">{message}</p>
            </div>
        </div>
    );
};
