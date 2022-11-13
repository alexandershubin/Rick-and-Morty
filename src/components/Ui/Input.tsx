import { ChangeEvent } from 'react';

interface IInput {
    className?: string;
    title: string;
    name: string;
    value: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    className = 'filter-input',
    title,
    name,
    value,
    type,
    onChange,
}: IInput) => {
    return (
        <div className={`input-wrapper ${className}`}>
            <label className="form-label" htmlFor={name}>
                {title}
            </label>
            <input
                placeholder={`Enter ${name}`}
                className={`form-input ${name}`}
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
