import { Fragment } from 'react';
import WidgetItem from './WidgetItem';
import '../../assets/styles/widget.scss';
import type { IResult } from '../../type';

interface IWidget {
    results?: IResult[];
}

const WidgetList = ({ results }: IWidget) => {
    return (
        <>
            <ul className="widget-list">
                {results?.map((result) => {
                    return (
                        <Fragment key={result.id}>
                            <WidgetItem result={result} />
                        </Fragment>
                    );
                })}
            </ul>
        </>
    );
};

export default WidgetList;
