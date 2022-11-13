import type { IInfo } from 'type';

interface ICardPagination {
    info?: IInfo;
    pageIndex: number;
    setPageIndex: (arg: number) => void;
}

const WidgetPagination = ({
    info,
    pageIndex,
    setPageIndex,
}: ICardPagination) => {
    const decrement = () => {
        if (pageIndex > 1) {
            setPageIndex(pageIndex - 1);
        } else {
            setPageIndex(1);
        }
    };

    const increment = () => {
        if (info) {
            pageIndex < info.pages && setPageIndex(pageIndex + 1);
        }
    };

    return (
        <div className="pagination">
            <button className="btn btn__pagination" onClick={decrement}>
                Prev
            </button>
            <span className="pagination__count">
                <span className="pagination__current">{pageIndex}</span>/
                <span className="pagination__total">{info?.pages}</span>
            </span>
            <button className="btn btn__pagination" onClick={increment}>
                Next
            </button>
        </div>
    );
};

export default WidgetPagination;
