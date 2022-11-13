import '../../assets/styles/alert.scss';

interface IAlert {
    type?: string;
    message: string;
}

const Alert = ({ type, message }: IAlert) => {
    return (
        <div className={`alert ${type} alert-dismissible`} role="alert">
            <p className="alert-message">{message}</p>
        </div>
    );
};

export default Alert;
