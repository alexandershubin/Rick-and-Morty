import React, { useEffect, useRef, useState } from 'react';
import Select from '../Ui/Select';
import Input from '../Ui/Input';
import Svg from '../Ui/Svg';
import type { IOption } from '../../type';

interface IWidgetForm {
    setValue: (params: string) => void;
    setPageIndex: (params: number) => void;
}
const optionGender: IOption[] = [
    { id: 1, name: 'Female' },
    { id: 2, name: 'Male' },
    { id: 3, name: 'Genderless' },
    { id: 4, name: 'unknown' },
];

const optionStatus: IOption[] = [
    { id: 1, name: 'Alive' },
    { id: 2, name: 'Dead' },
    { id: 3, name: 'unknown' },
];

const initialProfile = {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
};

const WidgetForm = ({ setValue, setPageIndex }: IWidgetForm) => {
    const [profile, setProfile] = useState(initialProfile);
    const [visible, setVisible] = useState(true);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [height, setHeight] = useState<string>('0');

    const refForm = useRef<HTMLFormElement>(null);

    const inputClass = isOpened ? 'show' : 'hidden';
    let params = '';

    const onScroll = () => {
        const currentScrollPos = window.scrollY;
        const visible = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);
        setVisible(visible);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [visible, prevScrollPos]);

    useEffect(() => {
        if (null !== refForm.current) {
            setHeight(isOpened ? `${refForm.current.scrollHeight}px` : '0');
        }
    }, [isOpened]);

    const onChangeHandle = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const value = e.target.value;
        const name = e.target.name;
        setProfile({ ...profile, [name]: value });
    };

    const toggle = () => {
        setIsOpened(!isOpened);
    };

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPageIndex(1);
        const data = new FormData(e.target);
        const payload = { ...Object.fromEntries(data.entries()) };
        for (const key in payload) {
            if (payload[key] && payload[key] !== '') {
                params = `${params}&${key}=${payload[key]}`;
            }
        }

        setIsOpened(!isOpened);
        setValue(params);
    };

    const onReset = () => {
        setProfile(initialProfile);
        setValue('');
    };

    return (
        <div className={!visible ? 'form-wrapper hidden' : 'form-wrapper'}>
            <span className="panel" onClick={toggle}>
                {!isOpened && 'Form search'}
                <Svg className={isOpened ? 'svg rotate' : 'svg'} />
            </span>
            <form
                onSubmit={onSubmit}
                className={'form-widget'}
                style={{ maxHeight: `${height}` }}
                ref={refForm}
            >
                <Input
                    className={inputClass}
                    title={'Name'}
                    name={'name'}
                    value={profile.name}
                    type={'text'}
                    onChange={onChangeHandle}
                />
                <Select
                    className={inputClass}
                    title={'Status'}
                    name={'status'}
                    value={profile.status}
                    options={optionStatus}
                    onChange={onChangeHandle}
                />

                <Input
                    className={inputClass}
                    title={'Species'}
                    name={'species'}
                    value={profile.species}
                    type={'text'}
                    onChange={onChangeHandle}
                />
                <Input
                    className={inputClass}
                    title={'Type'}
                    name={'type'}
                    value={profile.type}
                    type={'text'}
                    onChange={onChangeHandle}
                />

                <Select
                    className={isOpened ? 'show' : 'hidden'}
                    title={'Gender'}
                    name={'gender'}
                    value={profile.gender}
                    options={optionGender}
                    onChange={onChangeHandle}
                />
                <div
                    className={
                        isOpened ? 'btn-wrapper show' : 'btn-wrapper hidden'
                    }
                >
                    <button className="btn btn__form" type="submit">
                        Find
                    </button>
                    <button
                        className="btn btn__form"
                        type="reset"
                        onClick={onReset}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WidgetForm;
