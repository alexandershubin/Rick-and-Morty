import { ChangeEvent } from 'react';
import type { IOption } from '../../type';

interface ISelect {
    className?: string;
    title: string;
    name: string;
    value: string;
    options: IOption[];
    onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

const Select = ({
    className = 'filter-select',
    title,
    name,
    value,
    options,
    onChange,
}: ISelect) => {
    return (
        <div className={`select-wrapper ${className}`}>
            <label className="form-label" htmlFor={name}>
                {title}
            </label>
            <select
                className={`form-select ${name}`}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">choose {name}</option>
                {options.map((option) => {
                    return (
                        <option key={option.id} value={option.name}>
                            {option.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
