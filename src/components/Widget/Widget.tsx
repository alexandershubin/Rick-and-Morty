import { useState } from 'react';
import { useWidgetSwr } from 'query/useWidgetSwr';
import { useDebounce } from 'use-debounce';
import WidgetForm from './WidgetForm';
import WidgetPage from './WidgetPage';
import WidgetPagination from './WidgetPagination';

const Widget = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [value, setValue] = useState('');

    const debouncedPageNumber = useDebounce<number>(pageIndex, 500);

    const { data, isLoading, isError } = useWidgetSwr(
        `?page=${debouncedPageNumber[0]}${value}`
    );

    return (
        <main className="main container">
            <WidgetForm setValue={setValue} setPageIndex={setPageIndex} />
            <WidgetPage data={data} isLoading={isLoading} isError={isError} />
            <WidgetPagination
                info={data?.info}
                setPageIndex={setPageIndex}
                pageIndex={pageIndex}
            />
        </main>
    );
};

export default Widget;
