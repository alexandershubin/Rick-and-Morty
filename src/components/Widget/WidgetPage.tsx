import WidgetList from './WidgetList';
import Loader from '../Ui/Loader';
import Alert from '../Ui/Alert';
import type { IData } from 'type';

interface IWidgetPage {
    data?: IData;
    isLoading: boolean;
    isError: boolean;
}

const WidgetPage = ({ data, isLoading, isError }: IWidgetPage) => {
    if (isLoading) return <Loader />;
    if (isError)
        return <Alert type={'alert-danger'} message={'Error request'} />;

    return (
        <section className="widget">
            <WidgetList results={data?.results} />
        </section>
    );
};

export default WidgetPage;
