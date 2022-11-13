import '../../assets/styles/popup.scss';
import type { IResult } from '../../type';

interface IPopupInfo {
    result?: IResult;
    hidePopup: () => void;
}

const PopupInfo = ({ result, hidePopup }: IPopupInfo) => {
    const date = new Date(result ? result?.created : '-');

    return (
        <section className="popup">
            <span className="popup-close" onClick={hidePopup} />
            <img className="popup-image" src={result?.image} alt="image" />
            <h2>{result?.name}</h2>
            <p className="widget-list__p">
                <span
                    className={`widget-list__status widget-list__status--${result?.status.toLocaleLowerCase()}`}
                />
                {result?.status} - {result?.species ?? '-'}
            </p>
            <p className="widget-list__p">
                <span className="widget-list__name">Type:</span>{' '}
                <span>{result?.type || '-'}</span>
            </p>
            <p className="widget-list__p">
                <span className="widget-list__name">Gender:</span>{' '}
                <span>{result?.gender}</span>
            </p>
            <p className="widget-list__p">
                <span className="widget-list__name">location:</span>{' '}
                <span className="widget-list__span">
                    {result?.location.name}
                </span>
                <a
                    className="widget-list__link"
                    href={result?.location.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {result?.location.url}
                </a>
            </p>
            <p className="widget-list__p">
                <span className="widget-list__name">created</span>:{' '}
                <span>{date.toLocaleDateString()}</span>
            </p>
            <p className="widget-list__p">
                <span className="widget-list__name">api</span>:{' '}
                <a
                    className="widget-list__link"
                    href={result?.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {result?.url}
                </a>
            </p>
        </section>
    );
};

export default PopupInfo;
