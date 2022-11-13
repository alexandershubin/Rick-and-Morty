import { useState } from 'react';
import PopupInfo from './PopupInfo';
import { IResult } from '../../type';

interface IWidgetItem {
    result: IResult;
}

const WidgetItem = ({ result }: IWidgetItem) => {
    const [isActive, setIsActive] = useState<string>('');

    const showPopup = (id: string) => {
        setIsActive(id);
        document.body.style.overflow = 'hidden';
    };

    const hidePopup = () => {
        setIsActive('');
        document.body.style.overflow = 'inherit';
    };

    return (
        <>
            <li className="widget-list__item" key={result.id}>
                <div className="widget-list__image">
                    <img src={result.image} alt="image" />
                </div>
                <div className="widget-list__content">
                    <h2 className="widget-list__h2">{result.name}</h2>
                    <p className="widget-list__p">
                        <span
                            className={`widget-list__status widget-list__status--${result.status.toLocaleLowerCase()}`}
                        />
                        {result.status} - {result.species ?? '-'}
                    </p>
                    <p className="widget-list__p">
                        Type: <span>{result.type || '-'}</span>
                    </p>
                    <p className="widget-list__p">
                        Gender: <span>{result.gender}</span>
                    </p>
                    <button
                        className="btn widget-list__btn"
                        onClick={() => showPopup(`${result.id}`)}
                    >
                        More info
                    </button>
                </div>
            </li>
            {isActive !== '' ? (
                <>
                    <div className="overlay" onClick={hidePopup} />
                    <PopupInfo result={result} hidePopup={hidePopup} />
                </>
            ) : (
                ''
            )}
        </>
    );
};

export default WidgetItem;
